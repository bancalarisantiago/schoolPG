///from modules
import axios from "axios";
import { Dispatch } from "redux";
//types
import {
  ICreateSchool,
  ICredential,
  ISchoolId,
  ICreateUser,
  ICreateSubject,
  IGetUserById,
  IGetUserBy,
  ICreateCourse,
  IDeleteUserById,
  IUpdateUser,
  IRefreshToken,
} from "../../interfaces";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api",
});

export const GET_USER_LOGGED = "GET_USER_LOGGED";
export const GET_SCHOOL = "GET_SCHOOL";
export const MATCH_USERS = "MATCH_USER";
export const USER_DETAIL = "USER_DETAIL";
export const DELETE_USER_BY_ID = "DELETE_USER_BY_ID";
export const PUT_USER = "PUT_USER";
export const USER_LOGOUT = "USER_LOGOUT";
/* export const REFRESH_TOKEN = "REFRESH_TOKEN"; */

//logout
export const logout = () => (dispatch: Dispatch) => {
  console.log("logout");
  return dispatch({
    type: USER_LOGOUT,
  });
};

//get
export const getSchoolById =
  (payload: ISchoolId) => async (dispatch: Dispatch) => {
    const r = await instance.get("/school/" + payload.schoolId, {
      headers: {
        "auth-token": payload.accessToken,
      },
    });
    dispatch({
      type: GET_SCHOOL,
      payload: r.data,
    });
    return r.data;
  };

export const getUserById =
  (payload: IGetUserById) => async (dispatch: Dispatch) => {
    new Promise<void>((res, rej) => {
      dispatch({ type: USER_DETAIL, payload: {} });
    });
    const r = await instance.get(`/user/${payload.userId}`, {
      headers: {
        "auth-token": payload.accessToken,
      },
    });
    dispatch({
      type: USER_DETAIL,
      payload: r.data,
    });
  };

//post
export const getUserByLogin =
  (payload: ICredential) => async (dispatch: Dispatch) => {
    const r = await instance.post("/login", payload);
    dispatch({
      type: GET_USER_LOGGED,
      payload: r.data,
    });
    return r.data;
  };

export const getUserBy =
  (payload: IGetUserBy) => async (dispatch: Dispatch) => {
    new Promise<void>((res, rej) => {
      dispatch({ type: MATCH_USERS, payload: {} });
    });

    const r = await instance.post("/user/search", payload.search, {
      headers: {
        "auth-token": payload.accessToken,
      },
    });

    dispatch({
      type: MATCH_USERS,
      payload: r.data,
    });
  };

export const createSchool = (payload: ICreateSchool) => async () => {
  await instance.post("/school", payload.createSchool, {
    headers: {
      "auth-token": payload.accessToken,
    },
  });
};

export const createUser = (payload: ICreateUser) => async () => {
  await instance.post("/user", payload.createUser, {
    headers: {
      "auth-token": payload.accessToken,
    },
  });
};

export const createSubject = (payload: ICreateSubject) => async () => {
  await instance.post("/subject", payload.createSubject, {
    headers: {
      "auth-token": payload.accessToken,
    },
  });
};

export const createCourse = (payload: ICreateCourse) => async () => {
  await instance.post("/course", payload.createCourse, {
    headers: {
      "auth-token": payload.accessToken,
    },
  });
};

/* export const refreshToken =
  (payload: IRefreshToken) => (dispatch: Dispatch) => async () => {
    console.log(payload);
    const r = await instance.post("/refresh", payload.refreshToken);
    dispatch({
      type: REFRESH_TOKEN,
      payload: r.data,
    });
  };
 */
//delete
export const deleteUserById =
  (payload: IDeleteUserById) => async (dispatch: any) => {
    await instance.delete(`/user/${payload.id}`, {
      headers: {
        "auth-token": payload.accessToken,
      },
    });
    dispatch({
      type: DELETE_USER_BY_ID,
    });
  };

//put
export const putUser = (payload: IUpdateUser) => async (dispatch: Dispatch) => {
  try {
    await instance.put(
      `/user/${payload.updateUser.id}`,
      payload.updateUser.user,
      {
        headers: {
          "auth-token": payload.accessToken,
        },
      }
    );

    dispatch({
      type: PUT_USER,
    });
  } catch (error) {
    console.log(error);
  }
};
