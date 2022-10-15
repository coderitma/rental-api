const conn = require("../../cores/conn");

const SupirModel = {};

SupirModel.create = async (data) => {
  await conn("supir").insert(data);
  let result = await SupirModel.get(data.kodeSupir);
  return result;
};

SupirModel.all = async () => {
  return await conn("supir").select("*");
};

SupirModel.get = async (kodeSupir) => {
  return await conn("supir").select("*").where("kodeSupir", kodeSupir).first();
};

SupirModel.update = async (kodeSupir, data) => {
  await conn("supir").where("kodeSupir", kodeSupir).update(data);
  return await SupirModel.get(kodeSupir);
};

SupirModel.delete = async (kodeSupir) => {
  await conn("supir").where("kodeSupir", kodeSupir).delete();
  return null;
};

module.exports = SupirModel;
