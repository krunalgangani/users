const dotenv = require("dotenv");
dotenv.config();
const swaggerJSDoc = require("swagger-jsdoc");

// options for the swagger docs
const swaggerDefinition = {
  // openapi: "3.0.0",
   info : {
    title: "Swagger", // Title of the documentation
    version: "1.0.0", // Version of the app
    description: "REST API for NodeJs WEB/MOBILE app", // short description of the app
   },
   host: process.env.APIURL || "localhost:8080", // the host or url of the app
   basePath: "/api/v1", // the basepath of your endpoint,
   schemes:
   - "https"
   - "http"
}

const swaggerOptions = {
  swaggerDefinition,
  apis: ["./app/routes/*"] // path to the API docs
}

// initialize swagger-jsdoc
module.exports = swaggerJSDoc(swaggerOptions);
