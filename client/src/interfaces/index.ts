//Actions
export interface IActions {
  GET_USER_LOGGED: string;
}

//Models DB

//Reducer
export interface IState {
  userSession: any;
}

export type SubmitEvent = React.SyntheticEvent;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface ICredential {
  email: string;
  password: string;
}
