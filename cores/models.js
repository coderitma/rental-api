const conn = require("./conn");

const UserModel = {};

UserModel.create = async (data) => {
  await conn("user").insert(data);
  let result = await UserModel.get(data.email, "*");
  return result;
};

UserModel.createAdmin = async (data) => {
  data.aktif = true;
  data.admin = true;
  data.staff = true;
  await conn("user").insert(data);
  let result = await UserModel.get(data.email, "*");
  return result;
};

UserModel.get = async (
  email,
  fields = ["email", "namaDepan", "namaBelakang"]
) => {
  return await conn("user").select(fields).where("email", email).first();
};

module.exports = UserModel;
