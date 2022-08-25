const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const basicAuth = require("express-basic-auth");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./app/config/swagger");
const morgan = require("morgan")
const helmet = require("helmet")

require("./app/config/db") //db connection

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(function (req, res, next) {
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append(
    "Access-Control-Allow-Headers",
    "x-access-token, Authorization, superadminkey, Origin, Content-Type, Accept"
  );
  next();
});

// use swagger-Ui-express for your app documentation endpoint
let userPassword = process.env.SWAGGER_USER_PASSWORD || "Krunal123@419";

var swaggerOptions = {
  swaggerOptions: {
      operationsSorter: (a, b) => {
          var methodsOrder = ["get", "post", "put", "delete"];
          var result = methodsOrder.indexOf(a.get("method")) - methodsOrder.indexOf(b.get("method"));

          if (result === 0) {
              result = a.get("path").localeCompare(b.get("path"));
          }

          return result;
      }
  }
}

app.use(
  "/docs",
  basicAuth({ users: { admin: userPassword }, challenge: true }),
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpec,swaggerOptions)
);

const apiRouter = require("./app/routes/index");
app.use("/api/v1", apiRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Node API server is UP." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
