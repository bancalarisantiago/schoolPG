//from modules
import mongoose, { Schema } from "mongoose";

//interface
import { ISchool } from "./ISchool";

const schemaSchool = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    number: { type: Number, required: true },
    streetName: { type: String, required: true },
    locality: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  description: {
    type: String,
    required: true,
  },
  orientation: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  cellphone: {
    type: String,
    //required: true
  },
  dataBase: {
    admins: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    students: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    teachers: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    tutors: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    degrees: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Degree",
      },
    ],
    subjects: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Subject",
      },
    ],
  },
});

const School = mongoose.model<ISchool>("School", schemaSchool);

export default School;
