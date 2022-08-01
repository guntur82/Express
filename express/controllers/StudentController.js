class StudentController {
  static getStudents(req, res) {
    res.send("Students page");
  }

  static create(req, res) {
    res.send("Create Student page");
  }

  static getInformation(req, res) {
    const id = +req.params.Id;
    isNaN(id) === false
      ? res.send(`Information page id number ${id}`)
      : res.send(`Id must be number`);
  }
}

module.exports = StudentController;
