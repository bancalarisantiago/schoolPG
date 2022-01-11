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


 }


export const getSubjectById = async (req: Request, res: Response) => {
        const { id } = req.body;

        try{

          const subject = await Subject.findById(id).populate({path: "courses", model: "Course"})
        
        console.log(subject);
        res.status(200).json(subject);
        } catch (error: any) {
        res.status(404).json({ message: error.message });
        }

 }