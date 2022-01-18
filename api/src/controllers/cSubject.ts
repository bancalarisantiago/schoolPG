//types
import { Request, Response } from "express";
import { ISubject } from "../models/Subject/ISubject";

//database
import { Types } from "mongoose";
const toId = Types.ObjectId;

//models
import User from "../models/User/User";
import Subject from "../models/Subject/Subject";
import Course from "../models/Course/Course";
import School from "../models/School/School";

export const createSubject = async (req: Request, res: Response) => {
  const { name, schoolId } = req.body;

  try {
    const newSubject = new Subject({
      name,
    });
    newSubject.save();

    await School.findByIdAndUpdate(new toId(schoolId), {
      subjects: new toId(newSubject._id),
    });

    res.status(200).json(newSubject);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getSubjects = async (req: Request, res: Response) => {
  try {
    const allSubjects = await Subject.find({});
    res.status(200).json(allSubjects);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getSubjectById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const subject = await Subject.findById(id).populate({
      path: "courses",
      model: "Course",
    });
    res.status(200).json(subject);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteSubjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const subject = await Subject.findById(id);
    if (!subject) {
      return res.status(404).json({ msg: "Event not found" });
    }
    const subjectDeleted = await subject.delete();
    res.status(200).json(subjectDeleted);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const addCourseToSubject = async (req: Request, res: Response) => {
  const { subjectId, courseId } = req.params;
  const subject = await Subject.findByIdAndUpdate(new toId(subjectId), {
    $push: {
      courses: new toId(courseId),
    },
  });
  subject
    ? res.send({ message: "relation was created succesfully" })
    : res.send({ error: "relation wasn'\t created succesfully" });
};
