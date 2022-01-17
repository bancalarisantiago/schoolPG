import { Types } from "mongoose" 
export interface ISubject extends Document {
    name: string;
    courses: Types.ObjectId[];
    teachers: Types.ObjectId[];
}
