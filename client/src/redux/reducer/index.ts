import { IRefreshToken, IState } from "../../interfaces";
import {
  GET_USER_LOGGED,
  GET_SCHOOL,
  MATCH_USERS,
  USER_DETAIL,
  PUT_USER,
  DELETE_USER_BY_ID,
  /* REFRESH_TOKEN, */
} from "../actions";

export const initialState: IState = {
  userSession: {},
  userSchool: {},
  matchUsers: {},
  userDetail: {},
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

cases[DELETE_USER_BY_ID] = (initialState: IState, payload: any) => {
  return {
    ...initialState,
  };
};

cases[PUT_USER] = (initialState: IState) => {
  return {
    ...initialState,
  };
};

/* cases[REFRESH_TOKEN] = (initialState: IState, payload: any) => ({
  ...initialState,
  userSession: {
    ...initialState.userSession,
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
  },
}); */

export default function rootReducer(
  state = initialState,
  { type, payload }: any
) {
  return cases[type] ? cases[type](state, payload) : state;
}

export type RootState = ReturnType<typeof rootReducer>;
