import { Response, Request } from "express";
import { Types } from "mongoose";
import Event from "../models/Event/Event";
const toId = Types.ObjectId;

export const getAllEvents = async (req: Request,res: Response) => {
        try {
            const allEvents = await Event.find({});

            res.status(200).json(allEvents)
        } catch(error) {
            console.log(error)
            res.status(404).json(error)
        }

       
}

export const createEvent = async (req: Request,res: Response) => {
        const {user, title, start, end} = req.body
            console.log(title)
        try{ 

            // const newEvent = new Event({
            //     user: new toId(user),
            //     title,
            //     start,
            //     end
            // })
            // console.log(newEvent)
            // newEvent.save();
            // res.status(200).json(newEvent)

        } catch (error) {
            console.log(error);
            res.status(404).json(error)
        }

}
export const updateEvent = async (req: Request,res: Response) => {

        const { id } = req.params; 

        try{
            const event = await Event.findById(id);
            if(!event) {
                return res.status(404).json({msg: "Event not found"})
            }
            const newEvent = {
                ...req.body
            };
            const eventUpdated = await Event.findByIdAndUpdate(id, newEvent, {new : true})
            res.status(200).json(eventUpdated)
        } catch(error) {
            console.log(error)
            res.status(404).json(error)
        }

}


export const deleteEvent = async (req: Request,res: Response) => {

        const { id } = req.params; 
        try{
            const event = await Event.findById(id);
            if(!event) {
                return res.status(404).json({msg: "Event not found"})
            }
            const eventDeleted = await event.delete();
            res.status(200).json(eventDeleted)
        } catch(error) {
            console.log(error)
            res.status(404).json(error)
        }
}