const db = require("../Configs/dbMySql");

const schedulesModel = {
  getSchedules: (page, limit) => {
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
  postSchedule: (body) => {
    const { title, location, date, note, image } = body;
    const queryString =
      "INSERT INTO schedule SET title =?, location = ?, date = ?, note = ?, image= ?";
    return new Promise((resolve, reject) => {
      db.query(
        queryString,
        [title, location, date, note, image],
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        }
      );
    });
  },
};

module.exports = schedulesModel;