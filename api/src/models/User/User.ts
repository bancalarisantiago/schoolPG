//from modules
import mongoose, { Schema, model } from "mongoose";

//interface
import { IUser } from "./IUser";

const schemaUser = new Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  userType: {
    type: String,
    required: true,
  },
  school: {
    type: mongoose.Types.ObjectId,
    ref: "School",
  },
  gender: {
    type: String,
  },
  location: {
    number: { type: Number },
    streetName: { type: String },
    locality: { type: String },
    postalCode: { type: String },
  },
  birthdate: {
    date: {
      type: String,
    },
  },
  document: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    min: 6,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  cellphone: {
    type: String,
  },
  picture: {
    type: String,
  },
  childInCharge: [
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
  degree: {
    type: mongoose.Types.ObjectId,
    ref: "Degree",
  },
});

export default model<IUser>("User", schemaUser);
