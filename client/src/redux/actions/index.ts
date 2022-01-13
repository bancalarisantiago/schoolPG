//from modules
import axios from "axios";
//types
import { ICredential } from "../../interfaces";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api",
});

export const GET_USER_LOGGED = "GET_USER_LOGGED";

export const getUserByLogin =
  (payload: ICredential) => async (dispatch: any) => {
    const r = await instance.post("/login", payload);
    dispatch({
      type: GET_USER_LOGGED,
      payload: r.data,
    });
  };
