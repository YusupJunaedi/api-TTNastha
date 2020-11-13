const express = require("express");

const scheduleRouter = require("./schedule");

const indexRouter = express.Router();

indexRouter.use("/", scheduleRouter);


module.exports = indexRouter;
