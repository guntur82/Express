const lecturerRoute = require('express').Router();
const LecturerController = require('../controllers/LecturerController');

lecturerRoute.get('/', LecturerController.getLecturer);
lecturerRoute.post('/create', LecturerController.create);
lecturerRoute.get('/information/:id', LecturerController.getInformation);
lecturerRoute.get('/delete/:id', LecturerController.delete);
lecturerRoute.post('/update/:id', LecturerController.update);
lecturerRoute.get('/search', LecturerController.search);

module.exports = lecturerRoute;
