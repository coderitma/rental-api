const conn = require("../../cores/conn");

const PinjamModel = {};

PinjamModel.create = async (data) => {
  await conn("pinjam").insert(data);
  let result = await PinjamModel.get(data.kodePinjam);
  return result;
};

PinjamModel.all = async () => {
  return await conn("pinjam").select("*");
};

PinjamModel.get = async (kodePinjam) => {
  return await conn("pinjam")
    .select("*")
    .where("kodePinjam", kodePinjam)
    .first();
};

PinjamModel.update = async (kodePinjam, data) => {
  await conn("pinjam").where("kodePinjam", kodePinjam).update(data);
  return await PinjamModel.get(kodePinjam);
};

PinjamModel.delete = async (kodePinjam) => {
  await conn("pinjam").where("kodePinjam", kodePinjam).delete();
  return null;
};

module.exports = PinjamModel;
