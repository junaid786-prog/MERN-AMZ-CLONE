const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    maxlength: [20, "Name should be less than 20 characters"],
  },
  fatherName: {
    type: String,
    required: [true, "Please Enter Father Name"],
    maxlength: [20, "Name should be less than 20 characters"],
  },
  phoneNo: {
    type: Number,
    required: [true, "Please Enter Contact no"],
    maxlength: [13, "Number should be less than 13 characters"],
  },
  rollNo: {
    type: String,
    required: [true, "Please Enter Roll No"],
    maxlength: [11, "Roll no should be less than 11 characters"],
  },
  coursesEnrolled: [
    {
      courseName: {
        type: String,
        required: [true, "Please Enter Course Name"],
        maxlength: [20, "Course name should be less than 20 characters"],
      },
      courseId: {
        type: String,
        required: [true, "Please Enter Course Id"],
        maxlength: [10, "Course id should be less than 10 characters"],
      },
      courseTeacher: {
        type: String,
        required: [true, "Please Enter Teacher Name For Course"],
        maxlength: [20, "Teacher name should be less than 20 characters"],
      },
    },
  ],
});

module.exports = mongoose.model("Student", studentSchema);
