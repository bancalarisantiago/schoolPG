import { IState } from "../../interfaces";
import { GET_USER_LOGGED } from "../actions";

export const initialState: IState = {
  userSession: {},
};

const cases: any = {};

cases[GET_USER_LOGGED] = (initialState: IState, payload: any) => ({
  ...initialState,
  userSession: payload,
});

export default function rootReducer(
  state = initialState,
  { type, payload }: any
) {
  return cases[type] ? cases[type](state, payload) : state;
}
