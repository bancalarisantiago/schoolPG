//database
import { Types } from "mongoose";
const toId = Types.ObjectId;

//types
import { Request, Response } from "express";
import { ICourse } from "../models/Course/ICourse";

//models
import Course from "../models/Course/Course";
import Subject from "../models/Subject/Subject"

export const createCourse = (req: Request, res: Response) => {
    const { name }: ICourse = req.body;
    console.log(name)
        try {
            const newCourse = new Course({
                name
            })
            newCourse.save();
            res.status(200).json(newCourse);
            } catch (error: any) {
        res.status(404).json({ message: error.message });
  } 
}

export const getCourses = async (req: Request, res: Response) => {
    try {
        const allCourses = await Course.find({});
        res.status(200).json(allCourses);
      } catch (error: any) {
        res.status(404).json({ message: error.message });
      }
}


export const getCourseById = async (req: Request, res: Response) => {
    const { id } = req.body;
    const populateQuery = [{path: "teachers", model: "User"},
                          {path: "students", model: "User"},
                          {path: "tutors", model: "User"},
                          {path: "subjects", model: "Subject"}
                        ]
  try {
      const course = await Course.findById(id).populate(populateQuery).lean();
      console.log(course);
      res.status(200).json(course);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
}

export const addSubjectToCourse = async (req: Request, res: Response) => {
      const { courseId, subjectId } = req.body;
   
      try {

        const course = await Course.findByIdAndUpdate(new toId(courseId), {
              $push: {
                subjects: new toId(subjectId),
              },
            });
        const subject = await Subject.findByIdAndUpdate(new toId(subjectId), {
          $push: {
            courses: new toId(courseId),
          },
        });
          res.status(200).json({ message: "relation was created succesfully" })

      } catch (error: any) {

        res.status(404).json({ error: "relation wasn'\t created succesfully" });
      }

}
