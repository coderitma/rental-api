const conn = require("../../cores/conn");

const MobilModel = {};

MobilModel.create = async (data) => {
  await conn("mobil").insert(data);
  let result = await MobilModel.get(data.kodeMobil);
  return result;
};

MobilModel.all = async () => {
  return await conn("mobil").select("*");
};

MobilModel.get = async (kodeMobil) => {
  return await conn("mobil").select("*").where("kodeMobil", kodeMobil).first();
};

MobilModel.update = async (kodeMobil, data) => {
  await conn("mobil").where("kodeMobil", kodeMobil).update(data);
  return await MobilModel.get(kodeMobil);
};

MobilModel.delete = async (kodeMobil) => {
  await conn("mobil").where("kodeMobil", kodeMobil).delete();
  return null;
};

module.exports = MobilModel;
