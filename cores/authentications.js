var jwt = require("jsonwebtoken");
var crypto = require("crypto");
const UserModel = require("./models");

exports.makePassword = (password, salt = null) => {
  if (!salt) {
    salt = crypto.randomBytes(16).toString("hex");
  }

  password = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");

  return { salt, password };
};

exports.authenticated = async (req) => {
  const user = await UserModel.get(req.body.email, "*");

  if (!user) {
    return null;
  }

  const { password } = await this.makePassword(req.body.password, user.salt);

  if (password === user.password) {
    return {
      email: user.email,
      nama: user.nama,
      aktif: user.aktif,
    };
  }

  return null;
};

exports.makeToken = async (user) => {
  return jwt.sign(user, process.env.PROJECT_KEY, { expiresIn: "10000000s" });
};
