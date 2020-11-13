const db = require("../Configs/dbMySql");

const schedulesModel = {
  getSchedules: (page) => {
    const offset = (page - 1) * limit;
    const queryString = `SELECT * FROM schedule order by schedule.id DESC LIMIT ? OFFSET ?`;
    return new Promise((resolve, reject) => {
      db.query(queryString, [parseInt(limit), offset], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = schedulesModel;