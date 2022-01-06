import mongoose from "mongoose";
import { ITutor } from "./interfacemodels"

const Schema = mongoose.Schema;

const schemaTutor = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    childInCharge: {
      type: Schema.Types.ObjectId, ref: "Student"
    },
  
  })
  
  const TutorModel = mongoose.model<ITutor>("Tutor", schemaTutor)
  
  export default TutorModel;