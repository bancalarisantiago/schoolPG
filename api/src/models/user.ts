import mongoose from "mongoose";
import { IUser } from "./interfacemodels"

const Schema = mongoose.Schema;

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
      type: Number, // 1 - Admin // 2 - Teacher // 3 - Tutor // 4 - Student
      //required: true
    },
    school: {
      type: Schema.Types.ObjectId, ref: 'School'
    },
    gender: {
        type: String,
    },
    location: {
      number: { type: Number , required: true },
      streetName: { type: String, required: true },
      locality: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    birthdate: {
      date: {
        type: String,
        //required: true,
      },
      age: {
        type: Number,
        //required: true,
      },
    },
    document: {
      type: Number,
      //required: true,
    },
    email: {
      type: String,
      //required: true,
    },
    phone: {
        type: String,
        //required: true
    },
    cellphone: {
      type: String,
    },
    login: {
      username: {
        type: String,
        //required: true,
      },
      password: {
        type: String,
        //required: true,
      },
    },
    picture: {
        type: String,
        //required: true,
    },
  });
  
  const UserModel = mongoose.model<IUser>("User", schemaUser);

  export default UserModel;