import mongoose from "mongoose";
import { IDegree } from "./interfacemodels"
  
const Schema = mongoose.Schema;
    
const schemaDegree = new Schema({
      name: {
        type: String,
        required: true
      },
      students: {
        type: [{type:Schema.Types.ObjectId, ref: "Student"}]
      },
      teachers: {
        type: [{type:Schema.Types.ObjectId, ref: "Teacher"}]
      },
      subjects: {
        type: [{type:Schema.Types.ObjectId, ref: "Subject"}]
      },
     
  })
  
const DegreeModel = mongoose.model<IDegree>("Degree", schemaDegree)
  
export default DegreeModel;  