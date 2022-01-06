import mongoose from "mongoose";
import { ISubject } from "./interfacemodels"
  
const Schema = mongoose.Schema;
    
const schemaSubject = new Schema({
    name: {
        type: String,
        required: true
    },
    degrees:{
        type: [{type:Schema.Types.ObjectId, ref: "Degree"}]
    }
   
  })
  
const SubjectModel = mongoose.model<ISubject>("Subject", schemaSubject)

export default SubjectModel;
  