//from modules
import axios from "axios";
import { Dispatch } from "redux";
//types
import { ICreateSchool, ICredential, ISchoolId, IUser , ICreateStudent, ICreateAdmin} from "../../interfaces";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api",
});

export const GET_USER_LOGGED = "GET_USER_LOGGED";
export const GET_SCHOOL = "GET_SCHOOL";
export const MATCH_USERS = "MATCH_USER";
export const CREATE_COURSE = "CREATE_COURSE"
export const GET_USERS = "GET_USERS"
export const GET_USER_BY_DNI = "GET_USER_BY_DNI"
export const GET_SUBJECTS = "GET_SUBJECTS"


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

export const getUserBy = (payload: IUser) => async (dispatch: Dispatch) => {
  new Promise<void>((res, rej) => {
    dispatch({ type: MATCH_USERS, payload: {} });
  });
  const r = await instance.post("/user/search", payload);
  dispatch({
    type: MATCH_USERS,
    payload: r.data,
  });
};

export const createCourse = (course:any)=>{
  return async function (dispatch:any){
       try{
          const newCourse = await axios.post("http://localhost:5000/api/course", course)
          const student = await course.students.map( (student:any) => {
              const updateUser = axios.put(`http://localhost:5000/api/user/course/${newCourse.data._id}/${student}`)
          })
          await addRelationSubjectByCourse(newCourse.data._id, course.subjects)()
        dispatch({type: CREATE_COURSE, payload: newCourse.data})
      }catch(err){
      console.log(err)
      }
  }
}

const addRelationSubjectByCourse = (courseId:any,array:any)=>{
  return function (){   
  try{
    array.map((subjectId:string)=> axios.put(`http://localhost:5000/api/subject/${subjectId}/${courseId}`) )  
    console.log(courseId, array)
  }catch(error){
      console.log(error)
      }
  }
}

export const getUsers = ()=>{
  return async function (dispatch:any){
  try{
          const students =  await axios.get("http://localhost:5000/api/user")
          dispatch({type: GET_USERS, payload: students.data})
      } catch(err){
      console.log(err)
      }
  }
}


export const getUsersByFilters = (props:Object)=>{
  return async function (dispatch:any){
  try{
          const students =  await axios.get("http://localhost:5000/api/user", props)
          dispatch({type: GET_USERS, payload: students.data})
      } catch(err){
      console.log(err)
      }
  }
}

export const getUserByDni = (payload:any)=>{
  return async function(dispatch:any){
      try{
          dispatch({type:GET_USER_BY_DNI, 
              payload})
      } catch(error){
          console.log(error)
      }
  }
}

export const getSubject = ()=>{
  return async function(dispatch:any){
      try{
          const subjects = await axios.get("http://localhost:5000/api/subject")
          dispatch({type: GET_SUBJECTS, payload: subjects.data})
      }catch(error){
          console.log(error)
      }
  }
}

export const createSchool = (payload: ICreateSchool) => async () => {
  const r = await instance.post("/school", payload);
};


export const createStudent = (payload: ICreateStudent) => async () => {
  const r = await instance.post("/user", payload);

};

export const createadmin = (payload: ICreateAdmin) => async () => {
  const r = await instance.post("/user", payload);
};

export const createTeacher= (payload: ICreateStudent) => async () => {
  const r = await instance.post("/user", payload);

  getUsers();
};