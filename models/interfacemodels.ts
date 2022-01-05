import { Document, Types } from "mongoose"

interface Location {
    number: number;
    streetName: string;
    locality: string;
    postalCode: number;
}

interface Fullname {
    first: string;
    last: string;
}

interface Birthdate {
    date: string;
    age: number;
}

interface Login {
    username: string;
    password: string | number; // Regular expression ????
}

export interface IUser extends Document {
      name: Fullname;
      userType: number;
      gender: string;
      location: Location;
      birthdate: Birthdate;
      document: number;
      email: string;
      phone: string;
      cellphone: string;
      login: Login;
      picture: string;
}


export interface IStudent extends IUser, Document {
    person: Types.ObjectId;
    tutors: Types.ObjectId;
    degree: string;
}