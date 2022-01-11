import { Document, Types } from "mongoose";

export interface ISchool extends Document {
  name: String;
  location: Location;
  description: string;
  orientation: string;
  logo: string;
  email: string;
  phone: string;
  cellphone: string;
  admins: Types.ObjectId[];
  students: Types.ObjectId[];
  teachers: Types.ObjectId[];
  tutors: Types.ObjectId[];
  courses: Types.ObjectId[];
  subjects: Types.ObjectId[];

}
