export const initialState: string[] = [];

const cases: any = {};

export default function rootReducer(
  state = initialState,
  { type, payload }: any
) {
  return cases[type] ? cases[type](state, payload) : state;
}
