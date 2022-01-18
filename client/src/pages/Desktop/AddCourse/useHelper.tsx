import React, { useEffect, useState } from "react";

import { IState } from "../../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserByDni,
  getUsers,
  createCourse,
  getSubject,
} from "../../../redux/actions";
import { Navigate, useNavigate } from "react-router-dom";

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

  const teachers = useSelector((state: IState) => state.teachers);
  const student = useSelector((state: IState) => state.students);
  const subjects = useSelector((state: IState) => state.subjects);
  const schoolId = useSelector((state: IState) => state.userSchool._id);
  const school = useSelector((state: IState) => state.userSchool);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getSubject());
  }, [dispatch, getUsers, getSubject]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createCourse({ ...state, schoolId: schoolId }));
    navigate("/panel/general");
  };

  const handleDniChange = (e: any) => {
    setStateDni({ document: e.target.value });
  };

  const handleInputChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSelect = (e: any) => {
    if (state.students.includes(e.target.value))
      alert("Ya se encuentra en la lista");
    else {
      setState({ ...state, students: [...state.students, e.target.value] });
      let objetStudent = student.filter(
        (elemento: any) => elemento._id === e.target.value
      );

      setList({ ...list, student: [...list.student, ...objetStudent] });
    }
    e.target.value = "default"
  };

  const handleSelectTeacher = (e: any) => {
    if (state.teachers.includes(e.target.value))
      alert("Ya se encuentra en la lista");
    else {
      setState({ ...state, teachers: [...state.teachers, e.target.value] });
      let objetTeacers = teachers.filter(
        (elemento: any) => elemento._id === e.target.value
      );
      setList({ ...list, teachers: [...list.teachers, ...objetTeacers] });
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

  const handleDeleteTeacher = (result: any) => {
    const filterTeachers = state.teachers.filter((e) => e !== result);

    setState({ ...state, teachers: filterTeachers });
    let objetTeachers = list.teachers.filter((e: any) => e._id !== result);
    setList({ ...list, teachers: objetTeachers });
  };

  const handleSelectSubjects = (e: any) => {
    if (state.subjects.includes(e.target.value))
      alert("Ya se encuentra en la lista");
    else {
      setState({ ...state, subjects: [...state.subjects, e.target.value] });
      let objetTeacers = subjects.filter(
        (elemento: any) => elemento._id === e.target.value
      );
      setList({ ...list, subjects: [...list.subjects, ...objetTeacers] });
    }
    e.target.value = "default"
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
    subjects,
    state,
    stateDni,
    student,
    teachers,
    list,
  };
};

export default useHelper;