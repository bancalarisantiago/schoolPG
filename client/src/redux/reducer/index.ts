import { IState } from "../../interfaces";
import {
  GET_USER_LOGGED,
  GET_SCHOOL,
  MATCH_USERS,
  USER_DETAIL,
  CREATE_COURSE,
  GET_USERS,
  GET_USER_BY_DNI,
  GET_SUBJECTS,
} from "../actions";

export const initialState: IState = {
  userSession: {},
  userSchool: {},
  matchUsers: {},
  userDetail: {},
  students: [],
  teachers: [],
  backupData: [],
  courses: [],
  subjects: [],
};
const cases: any = {};

cases[GET_USER_LOGGED] = (initialState: IState, payload: any) => ({
  ...initialState,
  userSession: payload,
});

cases[GET_SCHOOL] = (initialState: IState, payload: any) => ({
  ...initialState,
  userSchool: payload,
});

cases[MATCH_USERS] = (initialState: IState, payload: any) => ({
  ...initialState,
  matchUsers: payload,
});

cases[USER_DETAIL] = (initialState: IState, payload: any) => ({
  ...initialState,
  userDetail: payload,
});

cases[CREATE_COURSE] = (payload: any) => {
  return {
    ...initialState,
    courses: payload,
  };
};

cases[GET_USERS] = (initialState: IState, payload: any) => {
  return {
    ...initialState,
    backupData: payload,
    students: payload.filter(
      (e: any) => e.userType === "student" && e.course.length < 1
    ),
    teachers: payload.filter((e: any) => e.userType === "teacher"),
  };
};

cases[GET_USER_BY_DNI] = (initialState: IState, payload: any) => {
  const toFilter = initialState.backupData;

  return {
    ...initialState,
    students: toFilter.filter(
      (e) => e.document.toString() === payload.document
    ),
  };
};

cases[GET_SUBJECTS] = (initialState: IState, payload: any) => {
  return {
    ...initialState,
    subjects: payload,
  };
};

export default function rootReducer(
  state = initialState,
  { type, payload }: any
) {
  return cases[type] ? cases[type](state, payload) : state;
}

export type RootState = ReturnType<typeof rootReducer>;
