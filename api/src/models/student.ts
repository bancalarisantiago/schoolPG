import mongoose from "mongoose";
import { IStudent } from "./interfacemodels"

const Schema = mongoose.Schema;

const schemaStudent = new Schema({
    user:{
          type: Schema.Types.ObjectId, ref: "User"
      },
      tutors: {
        type: Schema.Types.ObjectId, ref: "Tutor"
      },
      degree: {
        type: String,
      }
  })
  
  const StudentModel = mongoose.model<IStudent>("Student", schemaStudent)
  
  export default StudentModel;