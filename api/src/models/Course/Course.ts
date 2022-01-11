//from modules
import mongoose, { Schema } from "mongoose";

//interface
import { ICourse } from "./ICourse";

const schemaCourse = new Schema({
  name: {
    type: String,
    required: true,
  },
  shifts: {
    type: [{ type: mongoose.Types.ObjectId, ref: "Shift" }],
  },
  tutors:{
    type: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  students: {
    type: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  teachers: {
    type: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  subjects: {
    type: [{ type: mongoose.Types.ObjectId, ref: "Subject" }],
  },
});

const Course = mongoose.model<ICourse>("Course", schemaCourse);

export default Course;
