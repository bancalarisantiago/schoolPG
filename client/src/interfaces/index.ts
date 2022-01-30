//Models DB

//Reducer

export interface IFullUser {
  user: {
    name: {
      first: string;
      last: string;
    };
    location?: Location;
    _id: string;
    userType: string;
    gender?: string;
    birthdate?: string;
    document: string;
    username: string;
    email: string;
    password: string;
    phone?: string;
    cellphone?: string;
    picture?: string;
    course?: string[];
    subject?: string;
    school?: string;
    tutors?: [];
  };
  accessToken: string;
  refreshToken: string;
}

export interface ISchool {
  _id: string;
  name: string;
  location: Location;
  description: string;
  orientation: string;
  logo: string;
  email: string;
  phone: string;
  cellphone: string;
  admins: IFullUser[];
  students: IFullUser[];
  teachers: IFullUser[];
  courses: ICourses[];
  subjects: ISubject[];
}

export interface ICourses {
  _id: string;
  name: string;
  shifts: string;
  students: string[];
  teachers: string[];
  subjects: string[];
  classes: any[];
}

export interface ISubject {
  _id?: string;
  name: string;
  courses: string[];
  teachers: string[];
}

export interface IState {
  userSession: any;
  userSchool: any;
  matchUsers: any;
  userDetail: any;
  events: any;
}

export type SubmitEvent = React.SyntheticEvent;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ClickEvent = React.MouseEvent<HTMLElement>;

//for payloads
export interface ICredential {
  userInfo: string;
  password: string;
}

export interface ISchoolId {
  schoolId: string;
  accessToken: string;
}

export interface IGetUserById {
  userId?: string;
  accessToken: string;
}

export interface IGetUserBy {
  search: {
    userType: string;
    filter: string;
    schoolId: string;
  };
  accessToken: string;
}

export interface IUser {
  userType: string;
  filter: string;
  schoolId: string;
}

export interface ICreateSchool {
  createSchool: {
    name: string;
    location: Location;
    description: string;
    orientation: string;
    logo: string;
    email: string;
    phone: string;
    cellphone: string;
    userId: string;
  };
  accessToken: string;
}

export interface Location {
  streetNumber: string;
  streetName: string;
  locality: string;
  postalCode: string;
}

export interface ICreateUser {
  createUser: {
    name: {
      first: string;
      last: string;
    };
    document: string;
    email: string;
    username: string;
    userType: string;
    password: string;
    schoolId: string;
    courses?: string[];
    subject?: string[];
  };
  accessToken: string;
}

export interface IRefreshUser {
  userId: string;
  accessToken: string;
}

export interface ICreateSubject {
  createSubject: {
    name: string;
    courses: string[];
    teachers: string[];
    schoolId: string;
  };
  accessToken: string;
}

export interface ICreateCourse {
  createCourse: {
    name: string;
    shifts: string;
    students: string[];
    teachers: string[];
    subjects: string[];
    schoolId: string;
  };
  accessToken: string;
}

export interface IDeleteUserById {
  id: string;
  accessToken: string;
}

export interface IUpdateUser {
  updateUser: IUserSubmit;
  accessToken: string;
}

export interface IRefreshToken {
  refreshToken: string;
}

//for components

export interface IStateAddCourse {
  name: string;
  shifts: string;
  students: string[];
  teachers: string[];
  subjects: string[];
}

export interface IListState {
  students: any[];
  teachers: any[];
  subjects: any[];
}

export interface Schools {
  name: string;
  location: Location;
  description: string;
  orientation: string;
  logo: string;
  email: string;
  phone: string;
  cellphone: string;
}

interface Fullname {
  first: string;
  last: string;
}
export interface IStudentForm {
  name: Fullname;
  document: string;
  email: string;
  username: string;
  password: string;
  userType: string;
}

export interface IAdminForm {
  name: Fullname;
  document: string;
  email: string;
  username: string;
  password: string;
  userType: string;
}

export interface ITeacherForm {
  name: Fullname;
  document: string;
  email: string;
  username: string;
  password: string;
  userType: string;
  courses?: any;
  subject?: any;
}

interface ILocation {
  streetNumber: string;
  streetName: string;
  locality: string;
  postalCode: string;
}

export interface IUserForm {
  name: Fullname;
  gender: string;
  location: ILocation;
  birthdate: string;
  document: string;
  username: string;
  email: string;
  password: string;
  cellphone: string;
  picture: string;
}
export interface IUserSubmit {
  user: IUserForm;
  id: string;
}
