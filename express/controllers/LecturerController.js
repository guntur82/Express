const Lecturer = require('../models/Lecturer');

class LecturerController {
  static getLecturer(req, res) {
    Lecturer.getAllLecturer()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static create(req, res) {
    res.send('Create Lecturer page');
  }

  static getInformation(req, res) {
    const id = +req.params.Id;
    Lecturer.getInformation(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
    // isNaN(id) === false
    //   ? res.send(`Information page id number ${id}`)
    //   : res.send(`Id must be number`);
  }
}

module.exports = LecturerController;
