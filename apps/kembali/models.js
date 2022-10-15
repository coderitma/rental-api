const conn = require("../../cores/conn");

const KembaliModel = {};

KembaliModel.create = async (data) => {
  await conn("kembali").insert(data);
  let result = await KembaliModel.get(data.kodeKembali);
  return result;
};

KembaliModel.all = async () => {
  return await conn("kembali").select("*");
};

KembaliModel.get = async (kodeKembali) => {
  return await conn("kembali")
    .select("*")
    .where("kodeKembali", kodeKembali)
    .first();
};

KembaliModel.update = async (kodeKembali, data) => {
  await conn("kembali").where("kodeKembali", kodeKembali).update(data);
  return await KembaliModel.get(kodeKembali);
};

KembaliModel.delete = async (kodeKembali) => {
  await conn("kembali").where("kodeKembali", kodeKembali).delete();
  return null;
};

module.exports = KembaliModel;
