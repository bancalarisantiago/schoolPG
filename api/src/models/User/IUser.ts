import { Document, Types } from "mongoose";

interface Fullname {
  first: string;
  last: string;
}

interface Login {
  username: string;
  password: string | number; // Regular expression ????
}

interface Location {
  number: number;
  streetName: string;
  locality: string;
  postalCode: number;
}

export interface IUser extends Document {
  name: Fullname;
  userType: string;
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
  tutors?: Types.ObjectId[];
  degree?: Types.ObjectId[];
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}
