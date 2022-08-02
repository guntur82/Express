const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('Hello World!');
});

const lecturerRoutes = require('./lecture');
const studentRoutes = require('./student');
route.use('/lecturers', lecturerRoutes);
route.use('/students', studentRoutes);

module.exports = route;
