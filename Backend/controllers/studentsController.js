// creating api for students
const Student = require("../models/StudentModel");
const ErrorHandler = require("../utils/ErrorClass");
const asyncError = require("../middelware/asyncError");

exports.registerStudent = async (req, res, next) => {
  const student = await Student.create(req.body);

  res.status(200).json({
    student,
    message: "Student registered successfully",
  });
};

exports.getAllStudents = async (req, res, next) => {
  const students = await Student.find();

  res.status(200).json({
    students,
    message: "Students record",
  });
};

exports.getSingleStudent = async (req, res, next) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    return next(new ErrorHandler("No Student Found Against This Id", 404));
  }
  res.status(200).json({
    student,
    message: "Student record",
  });
};

exports.updateSingleStudent = async (req, res, next) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    return next(new ErrorHandler("No Student Found Against This Id", 404));
  }
  const std = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    std,
    message: "Student updated",
  });
};

exports.deleteSingleStudent = asyncError(async (req, res, next) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    return next(new ErrorHandler("No Student Found Against This Id", 404));
  }
  await student.remove();
  res.status(200).json({
    student,
    message: "Student removed",
  });
});
