//types
import { Request, Response } from "express";
import { IDegree } from "../models/Degree/IDegree";


//models
import Degree from "../models/Degree/Degree";


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

