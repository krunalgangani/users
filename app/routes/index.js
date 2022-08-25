const express = require("express");
const app = express();

const userRouter = require("./userRouter")
app.use("/user", userRouter)

const stateRouter = require("./stateRouter");
app.use("/state", stateRouter);

const countryRouter = require("./countryRouter");
app.use("/country", countryRouter);

module.exports = app;