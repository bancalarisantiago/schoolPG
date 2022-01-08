//types
import { Request, Response } from "express";
import { ISchool } from "../models/School/ISchool";
import User from "../models/User/User";

//models
import School from "../models/School/School";

export const getAllSchools = async (req: Request, res: Response) => {
  try {
    const allSchools = await School.find({});
    res.status(200).json(allSchools);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createSchool = async (req: Request, res: Response) => {
  const {
    name,
    location,
    description,
    orientation,
    logo,
    email,
    phone,
    cellphone,
  }: ISchool = req.body;
  try {
    const newSchool = new School({
      name,
      location,
      description,
      orientation,
      logo,
      email,
      phone,
      cellphone,
    });
    newSchool.save();
    res.status(200).json(newSchool);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
