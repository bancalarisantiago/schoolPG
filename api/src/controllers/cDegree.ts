//database
import { Types } from "mongoose";
const toId = Types.ObjectId;

//types
import { Request, Response } from "express";
import { IDegree } from "../models/Degree/IDegree";

//models
import Degree from "../models/Degree/Degree";
import Subject from "../models/Subject/Subject"

export const createDegree = (req: Request, res: Response) => {
    const { name }: IDegree = req.body;
    console.log(name)
        try {
            const newDegree = new Degree({
                name
            })
            newDegree.save();
            res.status(200).json(newDegree);
            } catch (error: any) {
        res.status(404).json({ message: error.message });
  } 
}

export const getDegrees = async (req: Request, res: Response) => {
    try {
        const allDegrees = await Degree.find({});
        res.status(200).json(allDegrees);
      } catch (error: any) {
        res.status(404).json({ message: error.message });
      }
}


export const getDegreeById = async (req: Request, res: Response) => {
    const { id } = req.body;
    const populateQuery = [{path: "teachers", model: "User"},
                          {path: "students", model: "User"},
                          {path: "tutors", model: "User"},
                          {path: "subjects", model: "Subject"}
                        ]
  try {
      const degree = await Degree.findById(id).populate(populateQuery).lean();
      console.log(degree);
      res.status(200).json(degree);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
}

export const addSubjectToDegree = async (req: Request, res: Response) => {
      const { degreeId, subjectId } = req.body;
   
      try {

        const degree = await Degree.findByIdAndUpdate(new toId(degreeId), {
              $push: {
                subjects: new toId(subjectId),
              },
            });
        const subject = await Subject.findByIdAndUpdate(new toId(subjectId), {
          $push: {
            degrees: new toId(degreeId),
          },
        });
          res.status(200).json({ message: "relation was created succesfully" })

      } catch (error: any) {

        res.status(404).json({ error: "relation wasn'\t created succesfully" });
      }

}
