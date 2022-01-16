//from modules
import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

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
    number: { type: String },
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
    type: String,
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
  tutors: [
    {
      name: String,
      cellphone: String,
      email: String,
    },
  ],
  course: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Course",
    },
  ],
});

schemaUser.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

schemaUser.methods.validatePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

const User = model<IUser>("User", schemaUser);

export default User;
