const lecturerRoute = require('express').Router();
const LecturerController = require('../controllers/LecturerController');

lecturerRoute.get('/', LecturerController.getLecturer);
lecturerRoute.get('/create', LecturerController.createPage);
lecturerRoute.post('/create', LecturerController.create);
lecturerRoute.get('/information/:id', LecturerController.getInformation);
lecturerRoute.get('/delete/:id', LecturerController.delete);
lecturerRoute.get('/update/:id', LecturerController.updatePage);
lecturerRoute.post('/update/:id', LecturerController.update);
lecturerRoute.get('/search', LecturerController.search);

module.exports = lecturerRoute;
