import mongoose from "mongoose";
import { IStudent } from "./interfacemodels"

const Schema = mongoose.Schema;

const schemaStudent = new Schema({
    user:{
          type: mongoose.Types.ObjectId, ref: "User"
      },
      tutors: {
        type: mongoose.Types.ObjectId, ref: "Tutor"
      },
      degree: {
        type: String,
      },

  })
  
  const Student = mongoose.model<IStudent>("student", schemaStudent)
  
  export default Student;