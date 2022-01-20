import React, { useEffect, useState } from "react";

import { IState } from "../../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserByDni,
  getUsers,
  createCourse,
  getSubject,
} from "../../../redux/actions";

interface IStateVal {
  name:string;
  shifts: string;
}
interface IStateLocal {
  name: string;
  shifts: string;
  students: string[];
  teachers: string[];
  subjects: string[];
}

interface IListState {
  student: any[];
  teachers: any[];
  subjects: any[];
}

const useHelper = () => {
  const [stateDni, setStateDni] = useState({
    document: "",
  });

  const [state, setState] = useState<IStateLocal>({
    name: "",
    shifts: "",
    students: [],
    teachers: [],
    subjects: [],
  });

  const [list, setList] = useState<IListState>({
    student: [],
    teachers: [],
    subjects: [],
  });

  const [errors, setErrors] = React.useState({
    name: "",
    shifts: "",
    button: true
  })

/* if(!state.shifts || !state.name) setErrors({...errors, button: true}) */

  const validate = (state: any, prop:string) => {
    switch (prop) {
      case "name" :{
        let name = ""
        let button = false
        if(!state.name) name = "Nombre del curso es requerido";
        if(state.name.length < 3){
          button = true
          name = "Nombre del curso debe tener almenos tres caracteres";
          return {...errors, name, button};
        }
        else if(state.name && !state.shifts){
          button = true
          return {...errors, name, button};
        }
        else return {...errors, name, button};    
      }
      case "shifts" :{
        let shifts = ""
        let button = false
        if(!state.shifts) shifts = "Turno del curso es requerido"
        if(state.shifts.length < 5){
          button = true
          shifts = "Nombre del turno debe terner almenos cinco caracteres"
          return { ...errors, shifts, button };
        }else if(state.shifts && !state.name){
          button = true
          return { ...errors, shifts, button };
        }
        else return { ...errors, shifts, button };
      }
      default: {
        return errors;
      }
    }
  }

  const schoolId = useSelector((state: IState) => state.userSchool._id);
  const school = useSelector((state: IState) => state.userSchool);
  console.log(school)

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createCourse({ ...state, schoolId: schoolId }));
    setState({
      name: "",
    shifts: "",
    students: [],
    teachers: [],
    subjects: [],
    })
  };

  const handleDniChange = (e: any) => {
    setStateDni({ document: e.target.value });
  };

  const handleInputChange = (e: any) => {
    const {name, value} = e.target
    let result = {...state, [name]: value}
    setState(result);

    setErrors(validate(result, name))
    console.log("type", value)
  };

  const handleSelect = (e: any) => {
    if (state.students.includes(e.target.value))
      alert("El estudiante se encuentra en lista");
    else {
      setState({ ...state, students: [...state.students, e.target.value] });
      let objetStudent = school.students.filter(
        (elemento: any) => elemento._id === e.target.value
      );

      setList({ ...list, student: [...list.student, ...objetStudent] });
    }
    e.target.value = "default"
  };

  const handleSelectTeacher = (e: any) => {
    if (state.teachers.includes(e.target.value))
      alert("El profesor se encuentra en lista");
    else {
      setState({ ...state, teachers: [...state.teachers, e.target.value] });
      let objetTeachers = school.teachers.filter(
        (elemento: any) => elemento._id === e.target.value
      );
      setList({ ...list, teachers: [...list.teachers, ...objetTeachers] });
    }
    e.target.value = "default"
  };

  const handleSelectSubjects = (e: any) => {
    if (state.subjects.includes(e.target.value))
      alert("La materia se encuentra en la lista");
    else {
      setState({ ...state, subjects: [...state.subjects, e.target.value] });
      let objetSubject = school.subjects.filter(
        (elemento: any) => elemento._id === e.target.value
      );
      setList({ ...list, subjects: [...list.subjects, ...objetSubject] });
    }
    e.target.value = "default"
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    dispatch(getUserByDni(stateDni));
  };

  const handleRefresh = (e: any) => {
    e.preventDefault();
    dispatch(getUsers());
  };

  const handleDelete = (result: any) => {
    const filterStudents = state.students.filter((e) => e !== result);
    setState({ ...state, students: filterStudents });
    let objetStudent = list.student.filter((e: any) => e._id !== result);
    setList({ ...list, student: objetStudent });
  };

  const handleDeleteTeacher = (id: any) => {
    const filterTeachers = state.teachers.filter((e) => e !== id);
    setState({ ...state, teachers: filterTeachers });
    let objetTeachers = list.teachers.filter((e: any) => e._id !== id);
    setList({ ...list, teachers: objetTeachers });
  };

 

  const handleDeleteSubject = (result: any) => {
    const filterSubjects = state.subjects.filter((e) => e !== result);
    setState({ ...state, subjects: filterSubjects });
    let objetSubjects = list.subjects.filter((e: any) => e._id !== result);
    setList({ ...list, subjects: objetSubjects });
  };

  return {
    handleSubmit,
    handleDniChange,
    handleInputChange,
    handleSelectTeacher,
    handleDeleteTeacher,
    handleSelectSubjects,
    handleDeleteSubject,
    handleSelect,
    handleSearch,
    handleRefresh,
    handleDelete,
    school,
    state,
    stateDni,
    list,
    errors
  };
};

export default useHelper;