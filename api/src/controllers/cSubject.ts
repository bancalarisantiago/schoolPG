//types
import { Request, Response } from "express";
import { ISubject } from "../models/Subject/ISubject";


//models
import Subject from "../models/Subject/Subject";


export const createSubject = async (req: Request, res: Response) => { 
    const { name }: ISubject = req.body;
        
  try {
    const newSubject = new Subject({
      name,
    
    });
    newSubject.save();
    res.status(200).json(newSubject);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }}


export const getSubjects = async (req: Request, res: Response) => {

  try {
    const allSubjects = await Subject.find({});
    res.status(200).json(allSubjects);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
 }


export const getSubjectById = async (req: Request, res: Response) => {
        const { id } = req.params;

        try{
          const subject = await Subject.findById(id).populate({path: "courses", model: "Course"})
        res.status(200).json(subject);
        } catch (error: any) {
        res.status(404).json({ message: error.message });
        }

 }

 export const deleteSubjectById = async (req: Request,res: Response) => {

  const { id } = req.params; // req.body?
  try{
      const subject = await Subject.findById(id);
      if(!subject) {
          return res.status(404).json({msg: "Event not found"})
      }
      const subjectDeleted = await subject.delete();
      res.status(200).json(subjectDeleted)
  } catch(error) {
      console.log(error)
      res.status(404).json(error)
  }
}