const { config } = require("dotenv");
let express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const main = require("./cores/main");
const app = express();

config();

app.use(cors());
app.use(bodyParser.json());

main(app);

app.listen(process.env.PROJECT_PORT, () => {
  console.log(
    `⚡️[JUCO]: Server is running at https://localhost:${process.env.PROJECT_PORT}`
  );
});
