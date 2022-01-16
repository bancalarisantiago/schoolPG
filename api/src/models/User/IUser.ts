import { Document, Types } from "mongoose";

interface Fullname {
  first: string;
  last: string;
}

interface Login {
  username: string;
  password: string; // Regular expression ????
}

interface Location {
  streetNumber: string;
  streetName: string;
  locality: string;
  postalCode: number;
}

interface Tutor {
  name: string,
  email: string,
  cellphone: string
}

export interface IUser extends Document {
  name: Fullname;
  userType: string;
  school: Types.ObjectId;
  gender: string;
  location: Location;
  birthdate: string;
  document: number;
  username: string;
  email: string;
  password: string;
  phone: string;
  cellphone: string;
  login: Login;
  picture: string;
  childInCharge?: Types.ObjectId[];
  tutors?: Tutor[];
  course?: Types.ObjectId[];
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}
