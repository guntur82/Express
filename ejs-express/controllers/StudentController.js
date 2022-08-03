const Student = require('../models/Student');

class StudentController {
  static getStudents(req, res) {
    Student.getAllStudent()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static create(req, res) {
    // console.log(req.body);
    Student.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getInformation(req, res) {
    const id = +req.params.id;
    Student.getInformation(id)
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

    Student.delete(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    const id = +req.params.id;

    Student.update(id, req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static search(req, res) {
    // console.log(req.query);
    Student.search(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = StudentController;
