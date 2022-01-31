import { Document, Types } from "mongoose";

interface Attend {
  name: string;
  attended: boolean;
}

interface classDate {
  date: string;
  attendance: Attend[];
}
export interface ICourse extends Document {
  name: string;
  students: Types.ObjectId[];
  teachers: Types.ObjectId[];
  subjects: Types.ObjectId[];
  shifts: Types.ObjectId[];
  classes: classDate;
}
