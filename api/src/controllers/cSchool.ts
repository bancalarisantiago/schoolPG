//types
import { Request, Response } from "express";
import { ISchool } from "../models/School/ISchool";

//models
import School from "../models/School/School";

export const getAllSchools = async (req: Request, res: Response) => {
  try {
    const allSchools = await School.find({});
    console.log(allSchools);
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

export const updateSchool = async (req: Request, res: Response) => {
  const { id } = req.params; // req.body?

  try {
    const school = await School.findById(id);

    if (!school) {
      return res.status(404).json({ msg: "Event not found" });
    }

    const newSchool = {
      ...req.body,
    };

    const schoolUpdated = await School.findByIdAndUpdate(id, newSchool, {
      new: true,
    });
    res.status(200).json(schoolUpdated);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const getSchoolById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const populateQuery = [
    { path: "subjects", model: "Subject" },
    { path: "students", model: "User" },
    { path: "teachers", model: "User" },
    { path: "admins", model: "User" },
  ];
  try {
    const school = await School.findById(id).populate(populateQuery).lean();

    res.status(200).json(school);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
