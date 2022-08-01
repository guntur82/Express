const lecturerRoute = require("express").Router();
const LecturerController = require("../controllers/LecturerController");

lecturerRoute.get("/", LecturerController.getLecturer);
lecturerRoute.get("/create", LecturerController.create);
lecturerRoute.get("/information/:Id", LecturerController.getInformation);

module.exports = lecturerRoute;
