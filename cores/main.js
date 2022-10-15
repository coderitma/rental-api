const KembaliController = require("../apps/kembali/controllers");
const MobilController = require("../apps/mobil/controllers");
const PinjamController = require("../apps/pinjam/controllers");
const SupirController = require("../apps/supir/controllers");
const UserController = require("./controllers");

module.exports = (app) => {
  app.use("/v1/users", UserController);
  app.use("/v1/mobil", MobilController);
  app.use("/v1/supir", SupirController);
  app.use("/v1/pinjam", PinjamController);
  app.use("/v1/kembali", KembaliController);
};
