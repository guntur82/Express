const lectureRoute = require("express").Router();

lectureRoute.get("/", (req, res) => {
  res.send("Lecturere page");
});
module.exports = lectureRoute;
