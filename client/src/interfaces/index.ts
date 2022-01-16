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
  students: any[]
  teachers:any[]
  backupData: any[]
  courses: any[]
  subjects: any[]
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

//for components

export interface Location {
  number: number;
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
  cellphone: string
}
