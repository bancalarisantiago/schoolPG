import mongoose, { Schema, model} from "mongoose";

import { IEvent } from "./IEvent"

const schemaEvent = new Schema({
    title: {
        type: String,
        required: true
    },
    fromTime: {
        type: String,
        required: true
    },
    tillTime: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Event = model<IEvent>("Event", schemaEvent);

export default Event;