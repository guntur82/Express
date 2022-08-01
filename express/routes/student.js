const studentRoute = require("express").Router();
const StudentController = require("../controllers/StudentController");

studentRoute.get("/", StudentController.getStudents);
studentRoute.get("/create", StudentController.create);
studentRoute.get("/information/:Id", StudentController.getInformation);

module.exports = studentRoute;
