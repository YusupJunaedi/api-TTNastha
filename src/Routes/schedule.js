const express = require("express");

const scheduleController = require("../Controllers/schedule");

const scheduleRouter = express();

scheduleRouter.get("/", scheduleController.getAllSchedules);

module.exports = scheduleRouter;