const express = require("express");
const PinjamModel = require("./models");

const PinjamController = express.Router();

PinjamController.post("/", async (req, res) => {
  try {
    req.body.user = "halo.coderitma@gmail.com";
    let result = await PinjamModel.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

PinjamController.get("/", async (req, res) => {
  try {
    let result = await PinjamModel.all();
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

PinjamController.get("/:kodePinjam", async (req, res) => {
  try {
    let result = await PinjamModel.get(req.params.kodePinjam);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

PinjamController.put("/:kodePinjam", async (req, res) => {
  try {
    let result = await PinjamModel.update(req.params.kodePinjam, req.body);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

PinjamController.delete("/:kodePinjam", async (req, res) => {
  try {
    await PinjamModel.delete(req.params.kodePinjam);
    return res.status(204).json(null);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = PinjamController;
