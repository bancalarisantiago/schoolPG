//database
import { Types } from "mongoose";
const toId = Types.ObjectId;

//types
import { Request, Response } from "express";

//models
import User from "../models/User/User";

export const getUsers = async (req: any, res: any) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req: any, res: any) => {
  const {
    name,
    userType,
    gender,
    location,
    birthdate,
    document,
    username,
    email,
    password,
    phone,
    cellphone,
    picture,
  } = req.body;
  try {
    const newUser = new User({
      name,
      userType,
      gender,
      location,
      birthdate,
      document,
      username,
      email,
      password,
      phone,
      cellphone,
      picture,
    });
    newUser.save();
    res.status(200).json(newUser);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const addUserToSchool = async (req: Request, res: Response) => {
  //id y el id del user
  const { schoolId, userId } = req.body;
  const user = await User.findByIdAndUpdate(new toId(userId), {
    school: new toId(schoolId),
  });
  console.log(user);
};
