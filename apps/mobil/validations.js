const { body, param } = require("express-validator");
const MobilModel = require("./models");

const mobilBaseValidator = {
  kodeMobil: {
    body: body("kodeMobil").notEmpty().withMessage("Nama mobil harus tersedia"),
    param: param("kodeMobil")
      .notEmpty()
      .withMessage("Kode mobil harus tersedia")
      .bail()
      .custom(async (value) => {
        try {
          let mobil = await MobilModel.get(value);
          if (!mobil) {
            return Promise.reject("Mobil tidak ada");
          }
        } catch (error) {}
      }),
  },
  namaMobil: {
    body: body("namaMobil").notEmpty().withMessage("Nama mobil harus tersedia"),
  },
  tarifPerJam: {
    body: body("tarifPerJam")
      .notEmpty()
      .withMessage("Tarif mobil/jam harus tersedia")
      .bail()
      .isInt({ min: 30000 })
      .withMessage("Tarif mobil/perjam minimal 30000"),
  },
  tarifPerHari: {
    body: body("tarifPerHari")
      .notEmpty()
      .withMessage("Tarif mobil/hari harus tersedia")
      .bail()
      .isInt({ min: 300000 })
      .withMessage("Tarif mobil/hari minimal 300000"),
  },
  tarifSupirPerJam: {
    body: body("tarifSupirPerJam")
      .notEmpty()
      .withMessage("Tarif supir/jam harus tersedia")
      .bail()
      .isInt({ min: 30000 })
      .withMessage("Tarif supir/perjam minimal 30000"),
  },
  tarifSupirPerHari: {
    body: body("tarifSupirPerHari")
      .notEmpty()
      .withMessage("Tarif supir/hari harus tersedia")
      .bail()
      .isInt({ min: 300000 })
      .withMessage("Tarif supir/hari minimal 300000"),
  },
};

exports.mobilValidateBeforeCreate = [
  mobilBaseValidator.kodeMobil.body.bail().custom(async (value) => {
    try {
      let mobil = await MobilModel.get(value);
      if (mobil) {
        return Promise.reject("Mobil sudah ada");
      }
    } catch (error) {}
  }),
  mobilBaseValidator.namaMobil.body,
  mobilBaseValidator.tarifPerJam.body,
  mobilBaseValidator.tarifPerHari.body,
  mobilBaseValidator.tarifSupirPerJam.body,
  mobilBaseValidator.tarifSupirPerHari.body,
  body("statusMobil")
    .notEmpty()
    .withMessage("Status mobil harus tersedia")
    .bail()
    .isIn(["ADA", "BOOKING", "JALAN"])
    .withMessage("Status mobil harus menjadi ADA, BOOKING atau JALAN")
    .bail()
    .custom(async (value) => {
      if (value === "BOOKING" || value === "JALAN") {
        return Promise.reject("Status booking atau jalan tidak diizinkan");
      }
    }),
];

exports.mobilValidateBeforeGet = [mobilBaseValidator.kodeMobil.param];

exports.mobilValidateBeforeUpdate = [
  mobilBaseValidator.kodeMobil.param,
  body("statusMobil")
    .notEmpty()
    .withMessage("Status mobil harus tersedia")
    .bail()
    .isIn(["ADA", "JALAN", "BOOKING"])
    .withMessage("Status mobil harus menjadi ADA, JALAN atau BOOKING")
    .bail()
    .custom(async (value, { req }) => {
      let mobil = await MobilModel.get(req.params.kodeMobil);
      if (mobil.statusMobil === "BOOKING" || mobil.statusMobil === "JALAN") {
        return Promise.reject(
          "Mobil yang sedang di booking / jalan, tidak bisa diubah"
        );
      }
    }),
  mobilBaseValidator.namaMobil.body,
  mobilBaseValidator.tarifPerJam.body,
  mobilBaseValidator.tarifPerHari.body,
  mobilBaseValidator.tarifSupirPerJam.body,
  mobilBaseValidator.tarifSupirPerHari.body,
];

exports.mobilValidateBeforeDelete = [
  mobilBaseValidator.kodeMobil.param.bail().custom(async (value) => {
    let mobil = await MobilModel.get(value);
    if (mobil.statusMobil === "BOOKING" || mobil.statusMobil === "JALAN") {
      return Promise.reject(
        "Mobil yang sedang di booking / jalan, tidak bisa dihapus"
      );
    }
  }),
];
