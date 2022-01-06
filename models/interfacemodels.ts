import { Document, Types } from "mongoose"

interface SchoolName {
    schooleName: string;
    schoolNumber: number
}

interface Location {
    number: number;
    streetName: string;
    locality: string;
    postalCode: number;
}

export interface ISchool {
    name: SchoolName;
    location: Location;
    description: string;
    orientation:string;
    logo: string;
    email: string;
    phone: string;
    cellphone: string;
    dataBase: {
        admins: Types.ObjectId;
        students:Types.ObjectId;
        teachers:Types.ObjectId;
        tutors: Types.ObjectId;
        degrees: Types.ObjectId;
        subjects:Types.ObjectId;
    }
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

export interface ITutor extends IUser, Document {
    person: Types.ObjectId;
   
}

export interface IAdmin extends IUser, Document {
    person: Types.ObjectId;
}
export interface ITeacher extends IUser, Document {
    person: Types.ObjectId;
}

export interface IDegree extends  Document {
    
}

export interface ISubject extends  Document {
    
}

export interface ICalendar extends Document {
    
}

