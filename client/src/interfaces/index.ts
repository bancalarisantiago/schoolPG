//Actions
export interface IActions {
  GET_USER_LOGGED: string;
}

//Models DB

//Reducer
export interface IState {
  userSession: any;
  userSchool: any;
  matchUsers: any;
  backupData: any[];
  courses: any[];
}

export type SubmitEvent = React.SyntheticEvent;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ClickEvent = React.MouseEvent<HTMLElement>;
export interface ICredential {
  email: string;
  password: string;
}

export interface ISchoolId {
  id: string;
}

export interface IUser {
  userType: string;
  filter: string;
}

export interface ICreateSchool {
  name: string;
  location: Location;
  description: string;
  orientation: string;
  logo: string;
  email: string;
  phone: string;
  cellphone: string;
  userId: string;
}

//for components

export interface Location {
  number: string;
  streetNumber: string;
  streetName: string;
  locality: string;
  postalCode: string;
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

export interface ICreateStudent {}

export interface ICreateAdmin {}
