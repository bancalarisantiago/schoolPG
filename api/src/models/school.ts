import mongoose from "mongoose";
import { ISchool } from "./interfacemodels"

const Schema = mongoose.Schema;

//School

const schemaSchool = new Schema({
  name: {
    schoolName: {
      type: String,
      required: true,
    },
    schoolNumber: {
      type: Number,
      required: true,
    },
    },
    location: {
      number: { type: Number , required: true },
      streetName: { type: String, required: true },
      locality: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    description: {
      type: String,
      required: true
    },
    orientation: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: true
    },
    cellphone: {
      type: String,
      //required: true
    },
    dataBase: {
      admins: {
        type: Schema.Types.ObjectId, ref: "Admin"
      },
      students: {
        type: Schema.Types.ObjectId, ref: "Student"
      },
      teachers: {
        type: Schema.Types.ObjectId, ref: "Teacher"
      },
      tutors: {
        type: Schema.Types.ObjectId, ref: "Tutor"
      },
      degrees: {
        type: Schema.Types.ObjectId, ref: "Degree"
      },
      subjects: {
        type: Schema.Types.ObjectId, ref: "Subject"
      }

    }
   
})

const SchoolModel = mongoose.model<ISchool>("School", schemaSchool);

export default SchoolModel