require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/index");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

const app = express();
const port = process.env.APP_PORT || 3001;

// CORS
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => console.log(`App listening on port ${port}!`));

// export default app;
module.exports = app;
