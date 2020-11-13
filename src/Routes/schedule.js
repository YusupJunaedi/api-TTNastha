const express = require("express");

const uploadImg = require("../Helpers/upload");

const scheduleController = require("../Controllers/schedule");

const scheduleRouter = express();

scheduleRouter.post("/add", uploadImg.singleUpload, scheduleController.postNewSchedule);
scheduleRouter.get("/", scheduleController.getAllSchedules);

module.exports = scheduleRouter;