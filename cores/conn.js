const { config } = require("dotenv");

config();

const options = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

const conn = require("knex")(options);

module.exports = conn;
