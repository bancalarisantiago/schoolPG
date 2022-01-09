//database
import { Types } from "mongoose";
const toId = Types.ObjectId;

//types
import { Request, Response } from "express";

//models
import User from "../models/User/User";
import School from "../models/School/School";
import { IUser } from "models/User/IUser";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
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
  }: IUser = req.body;
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

// export const addUserToSchool = async (req: Request, res: Response) => {
//   const { schoolId, userId } = req.body;

//   (await addRelation(userId, schoolId)) === "ok"
//     ? res.send({ message: "relation was created succesfully" })
//     : res.send({ error: "relation wasn'\t created succesfully" });
// };

// const addRelation = async (userId: string, schoolId: string) => {
//   const user = await User.findByIdAndUpdate(new toId(userId), {
//     school: new toId(schoolId),
//   });

//   const type = user?.userType + "s";

//   const school = await School.findByIdAndUpdate(new toId(schoolId), {
//     $push: {
//       [type]: new toId(userId),
//     },
//   });

//   return user && school ? "ok" : "error";
// };

export const addUserToSchool = async (req: Request, res: Response) => {
  const { schoolId, userId } = req.body;

  (await addRelation(userId, schoolId)) === "ok"
    ? res.send({ message: "relation was created succesfully" })
    : res.send({ error: "relation wasn'\t created succesfully" });
};

const addRelation = async (userId: string, schoolId: string) => {
  const user = await User.findByIdAndUpdate(new toId(userId), {
    school: new toId(schoolId),
  });

  const type = user?.userType + "s";

  const school = await School.findByIdAndUpdate(new toId(schoolId), {
    $push: {
      [type]: new toId(userId),
    },
  });

  return user && school ? "ok" : "error";
};
