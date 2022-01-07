import mongoose from "mongoose";
import { IDegree } from "./interfacemodels"
  
const Schema = mongoose.Schema;
    
const schemaDegree = new Schema({
      name: {
        type: String,
        required: true
      },
      students: {
        type: [{type:mongoose.Types.ObjectId, ref: "Student"}]
      },
      teachers: {
        type: [{type:mongoose.Types.ObjectId, ref: "Teacher"}]
      },
      subjects: {
        type: [{type:mongoose.Types.ObjectId, ref: "Subject"}]
      },
     
  })
  
const Degree = mongoose.model<IDegree>("degree", schemaDegree)
  
export default Degree;  