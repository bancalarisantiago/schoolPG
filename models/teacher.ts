import mongoose from "mongoose";
import { ITeacher } from "./interfacemodels"

const Schema = mongoose.Schema;



const schemaTeacher = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
   
  })
  
  const TeacherModel = mongoose.model<ITeacher>("Teacher", schemaTeacher)
  
  export default TeacherModel;