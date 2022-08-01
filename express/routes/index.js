const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hello World!");
});

const lecturerRoutes = require("./lecture");
route.use("/lecturers", lecturerRoutes);

const studentRoutes = require("./student");
route.use("/students", studentRoutes);

module.exports = route;
