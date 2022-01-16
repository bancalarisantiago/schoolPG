import { IState } from "../../interfaces";
import { GET_USER_LOGGED, GET_SCHOOL, MATCH_USERS } from "../actions";

export const initialState: IState = {
  userSession: {},
  userSchool: {},
  matchUsers: {},
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

export default function rootReducer(
  state = initialState,
  { type, payload }: any
) {
  return cases[type] ? cases[type](state, payload) : state;
}

export type RootState = ReturnType<typeof rootReducer>;
