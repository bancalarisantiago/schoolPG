//Libraries
import { Types, Document} from "mongoose";


export interface IEvent extends Document {
    title: string;
    fromTime: string;
    tillTime: string;
    start: string,
    end: string,
    user: Types.ObjectId,
}