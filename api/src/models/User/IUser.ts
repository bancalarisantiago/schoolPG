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
  email: string;
  phone: string;
  cellphone: string;
  login: Login;
  picture: string;
  childInCharge?: number[];
  tutors?: number[];
  degree?: string[];
}
