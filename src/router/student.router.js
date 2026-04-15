const express = require('express');
const studentController = require("../contollers/student.contoller")

const router = express.Router();
router.post("/createStudent",studentController.createStudent)
router.get("/getAllStudents",studentController.getAllStudents)
router.get("/getStudentById/:id",studentController.getStudentById)
router.put("/updateStudentById/:id",studentController.updateStudentById)
router.delete("/deleteStudentById/:id",studentController.deleteStudentById)

module.exports = router;