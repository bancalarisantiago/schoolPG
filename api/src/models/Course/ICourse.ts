import { Document, Types } from "mongoose";

export interface ICourse extends Document {
  name: string;
  students: Types.ObjectId[],
  teachers:Types.ObjectId[],  
  subjects:Types.ObjectId[],
  shifts:Types.ObjectId[]
}
