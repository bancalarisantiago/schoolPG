import { IState } from "../../interfaces";
import { GET_USER_LOGGED, GET_SCHOOL } from "../actions";

export const initialState: IState = {
  userSession: {},
  userSchool: {},
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

export default function rootReducer(
  state = initialState,
  { type, payload }: any
) {
  return cases[type] ? cases[type](state, payload) : state;
}

export type RootState = ReturnType<typeof rootReducer>;
