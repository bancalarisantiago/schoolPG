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
    type: String,
  },
  students: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  teachers: {
    type: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  subjects: {
    type: [{ type: Schema.Types.ObjectId, ref: "Subject" }],
  },
});

const Course = mongoose.model<ICourse>("Course", schemaCourse);

export default Course;
