//from database
import mongoose, { Schema } from "mongoose";

//interface
import { ISubject } from "./ISubject";

const schemaSubject = new Schema({
  name: {
    type: String,
    required: true,
  },
  degrees: {
    type: [{ type: mongoose.Types.ObjectId, ref: "Degree" }],
  },
});

const Subject = mongoose.model<ISubject>("Subject", schemaSubject);

export default Subject;
