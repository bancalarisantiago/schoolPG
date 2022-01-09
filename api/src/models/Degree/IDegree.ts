import { Document, Types } from "mongoose";

export interface IDegree extends Document {
  name: string;
  students: Types.ObjectId[],
  teachers:Types.ObjectId[],  
  subjects:Types.ObjectId[],
  shifts:Types.ObjectId[]
}
