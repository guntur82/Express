const route = require('express').Router();

route.get('/', (req, res) => {
  // res.send('Hello World!');
  // res.send({
  //   message: 'Home Page',
  // });
  res.render('index.ejs');
});

const lecturerRoutes = require('./lecture');
const studentRoutes = require('./student');
route.use('/lecturers', lecturerRoutes);
route.use('/students', studentRoutes);

module.exports = route;
