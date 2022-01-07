import mongoose from "mongoose";
import { ITeacher } from "./interfacemodels"

const Schema = mongoose.Schema;



const schemaTeacher = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
   
  })
  
  const Teacher = mongoose.model<ITeacher>("teacher", schemaTeacher)
  
  export default Teacher;