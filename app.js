require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");

const app = express();
const port = process.env.APP_PORT || 3001;

// CORS
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => console.log(`App listening on port ${port}!`));

// export default app;
module.exports = app;
