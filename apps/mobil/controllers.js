const express = require("express");
const validations = require("../../cores/validations");
const MobilModel = require("./models");
const {
  mobilValidateBeforeCreate,
  mobilValidateBeforeUpdate,
  mobilValidateBeforeGet,
  mobilValidateBeforeDelete,
} = require("./validations");

const MobilController = express.Router();

MobilController.post(
  "/",
  [validations(mobilValidateBeforeCreate)],
  async (req, res) => {
    try {
      let result = await MobilModel.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ message: "Something when wrong" });
    }
  }
);

MobilController.get("/", async (req, res) => {
  try {
    let result = await MobilModel.all();
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

MobilController.get(
  "/:kodeMobil",
  [validations(mobilValidateBeforeGet, 404)],
  async (req, res) => {
    try {
      let result = await MobilModel.get(req.params.kodeMobil);
      return res.json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
);

MobilController.put(
  "/:kodeMobil",
  [
    validations(mobilValidateBeforeGet, 404),
    validations(mobilValidateBeforeUpdate),
  ],
  async (req, res) => {
    try {
      let result = await MobilModel.update(req.params.kodeMobil, req.body);
      return res.json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
);

MobilController.delete(
  "/:kodeMobil",
  [
    validations(mobilValidateBeforeGet, 404),
    validations(mobilValidateBeforeDelete),
  ],
  async (req, res) => {
    try {
      await MobilModel.delete(req.params.kodeMobil);
      return res.status(204).json(null);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
);

module.exports = MobilController;
