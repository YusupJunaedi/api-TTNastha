const schedulesModel = require("../Models/schedule");
const formResponse = require("../Helpers/formResponse");

const schedulesController = {
  getAllSchedules: (req, res) => {
    const { page, limit } = req.query;
    schedulesModel
      .getSchedules(page, limit)
      .then((data) => {
        formResponse.pagination(req, res, data);
      })
      .catch((err) => {
        formResponse.error(res, data);
      });
  },
};

module.exports = schedulesController;
