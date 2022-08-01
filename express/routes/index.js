const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hello World!");
});

const lectureRoutes = require("./lecture");
route.use("/lecturers", lectureRoutes);
// lectureRoute.get("/lecturers", (req, res) => {
//     res.send("Lecturers page");
//   });

//   route.get("/student", (req, res) => {
//     res.send("Students page");
//   });
module.exports = route;
