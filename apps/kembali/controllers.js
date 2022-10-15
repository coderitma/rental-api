const express = require("express");
const KembaliModel = require("./models");

const KembaliController = express.Router();

KembaliController.post("/", async (req, res) => {
  try {
    req.body.user = "halo.coderitma@gmail.com";
    let result = await KembaliModel.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

KembaliController.get("/", async (req, res) => {
  try {
    let result = await KembaliModel.all();
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

KembaliController.get("/:kodeKembali", async (req, res) => {
  try {
    let result = await KembaliModel.get(req.params.kodeKembali);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = KembaliController;
