//from modules
import axios from "axios";

//models
import User from "../models/User/User";


export const getUsers = async (req: any, res: any) => {
  try {
    const allUsers= await User.find({});
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
