//from modules
import axios from "axios";
import { Dispatch } from "redux";
//types
import { ICredential, ISchoolId } from "../../interfaces";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api",
});

export const GET_USER_LOGGED = "GET_USER_LOGGED";
export const GET_SCHOOL = "GET_SCHOOL";

export const getUserByLogin =
  (payload: ICredential) => async (dispatch: Dispatch) => {
    const r = await instance.post("/login", payload);
    dispatch({
      type: GET_USER_LOGGED,
      payload: r.data,
    });
    return r.data;
  };

export const getSchoolById =
  (payload: ISchoolId) => async (dispatch: Dispatch) => {
    const r = await instance.get("/school/" + payload);
    dispatch({
      type: GET_SCHOOL,
      payload: r.data,
    });
    return r.data;
  };
