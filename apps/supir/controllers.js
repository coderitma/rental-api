const express = require("express");
const SupirModel = require("./models");

const SupirController = express.Router();

SupirController.post("/", async (req, res) => {
  try {
    let result = await SupirModel.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

SupirController.get("/", async (req, res) => {
  try {
    let result = await SupirModel.all();
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

SupirController.get("/:kodeSupir", async (req, res) => {
  try {
    let result = await SupirModel.get(req.params.kodeSupir);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

SupirController.put("/:kodeSupir", async (req, res) => {
  try {
    let result = await SupirModel.update(req.params.kodeSupir, req.body);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

SupirController.delete("/:kodeSupir", async (req, res) => {
  try {
    await SupirModel.delete(req.params.kodeSupir);
    return res.status(204).json(null);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = SupirController;
