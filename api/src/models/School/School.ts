//from modules
import mongoose, { Schema, Types } from "mongoose";

//interface
import { ISchool } from "./ISchool";

const schemaSchool = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    streetNumber: { type: String, required: true },
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
    default: "../../../../client/src/assets/logo-sin-pie.png",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  cellphone: {
    type: String,
    required: true,
  },

  admins: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  /* tutors: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ], */
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  subjects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
  ],
});

const School = mongoose.model<ISchool>("School", schemaSchool);

export default School;
