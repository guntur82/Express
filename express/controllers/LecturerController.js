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
    // console.log(req.body);
    Lecturer.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getInformation(req, res) {
    const id = +req.params.id;
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

  static delete(req, res) {
    const id = +req.params.id;

    Lecturer.delete(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    const id = +req.params.id;

    Lecturer.update(id, req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static search(req, res) {
    // console.log(req.query);
    Lecturer.search(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = LecturerController;
