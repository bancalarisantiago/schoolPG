import mongoose, { Schema, model} from "mongoose";

import { IEvent } from "./IEvent"

const schemaEvent = new Schema({
    title: {
        type: String,
        required: true
    },
    fromTime: {
        type: String,
       
    },
    tillTime: {
        type: String,
        
    },
    start: {
        type: Date,
        
    },
    end: {
        type: Date,
        
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Event = model<IEvent>("Event", schemaEvent);

export default Event;