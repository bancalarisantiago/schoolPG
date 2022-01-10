//database
import { Types } from "mongoose";
const toId = Types.ObjectId;

//types
import { Request, Response } from "express";

//models
import User from "../models/User/User";
import School from "../models/School/School";
import Degree from "../models/Degree/Degree";
import { IUser } from "models/User/IUser";

//from modules
import jwt from "jsonwebtoken";

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
  } = req.body;
  try {
    const newUser: IUser = new User({
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
    newUser.password = await newUser.encryptPassword(password);
    const savedUser = await newUser.save();

    //token
    const token: string = jwt.sign(
      { _id: savedUser._id },
      process.env.TOKEN_SECRET || "token de minima seguridad"
    );
    res.setHeader("auth-token", token).json(savedUser);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

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

export const addRelationTutorChild = async (req: Request, res: Response)=>{
  const { tutorId, childId} = req.body;

    const tutor = await User.findByIdAndUpdate(new toId(tutorId), {
      $push:{
        childInCharge: new toId(childId),
      },
    });
    

    const student = await User.findByIdAndUpdate(new toId(childId), {
      $push:{
        tutors: new toId(tutorId)
      }
    })
    tutor && student? res.send({tutor, student}): res.send("tutor or student wasn't found")
    
}

export const addUserToDegree = async (req: Request, res: Response) => {
  const { degreeId, userId } = req.body;

  (await addRelationUserToDegree(userId, degreeId)) === "ok"
    ? res.send({ message: "relation was created succesfully" })
    : res.send({ error: "relation wasn'\t created succesfully" });
};

const addRelationUserToDegree = async (userId: string, degreeId: string) => {
  const user = await User.findByIdAndUpdate(new toId(userId), {
    $push: {
      degree: new toId(degreeId),
    },
  });

  const type = user?.userType + "s";
  const degree = await Degree.findByIdAndUpdate(new toId(degreeId), {
    $push: {
      [type]: new toId(userId),
    },
  });
  return user && degree ? "ok" : "error";
};

