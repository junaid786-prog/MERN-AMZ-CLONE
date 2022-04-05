const express = require("express");
const {
  registerStudent,
  getAllStudents,
  getSingleStudent,
} = require("../controllers/studentsController");
const router = express.Router();

router.route("/std/new").post(registerStudent);
router.route("/std/all").get(getAllStudents);
router.route("/std/single/:id").get(getSingleStudent);
// router.route("/std/new").post(registerStudent);

module.exports = router;
