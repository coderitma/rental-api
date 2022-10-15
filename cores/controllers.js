const express = require("express");
const { makePassword, makeToken, authenticated } = require("./authentications");
const UserModel = require("./models");

const UserController = express.Router();

UserController.post("/register", [], async (req, res) => {
  try {
    const { salt, password } = makePassword(req.body.password);
    req.body.salt = salt;
    req.body.password = password;
    let result = await UserModel.create(req.body);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

UserController.get("/:email", async (req, res) => {
  try {
    let result = await UserModel.get(req.params.email);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

UserController.post("/signin", async (req, res) => {
  try {
    const user = await authenticated(req);
    return res.json({ token: await makeToken(user) });
  } catch (error) {
    return res.status(400).json(error);
  }
});

UserController.post("/register/admin", async (req, res) => {
  try {
    const { salt, password } = makePassword(req.body.password);
    req.body.salt = salt;
    req.body.password = password;
    let result = await UserModel.createAdmin(req.body);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = UserController;
