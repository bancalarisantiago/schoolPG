//from modules
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//interfaces
import { IState, IStateAddCourse, IListState } from "../../../interfaces";
//actions
import { createCourse, getSchoolById, getUserBy } from "../../../redux/actions";

const useHelper = () => {
  const userSession = useSelector((state: IState) => state.userSession);
  const userSchool = useSelector((state: IState) => state.userSchool);
  const matchUsers = useSelector((state: IState) => state.matchUsers);
  const dispatch = useDispatch();

  useEffect(() => {}, [userSchool]);

  const [state, setState] = useState<IStateAddCourse>({
    name: "",
    shifts: "",
    students: [],
    teachers: [],
    subjects: [],
  });

  const [list, setList] = useState<IListState>({
    students: [],
    teachers: [],
    subjects: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    shifts: "",
    button: true,
  });

  const validate = (state: any, prop: string) => {
    switch (prop) {
      case "name": {
        let name = "";
        let button = false;
        if (!state.name) name = "Nombre del curso es requerido";
        if (state.name.length < 3) {
          button = true;
          name = "Nombre del curso debe tener almenos tres caracteres";
          return { ...errors, name, button };
        } else if (state.name && !state.shifts) {
          button = true;
          return { ...errors, name, button };
        } else return { ...errors, name, button };
      }
      case "shifts": {
        let shifts = "";
        let button = false;
        if (!state.shifts) shifts = "Turno del curso es requerido";
        if (state.shifts.length < 5) {
          button = true;
          shifts = "Nombre del turno debe terner almenos cinco caracteres";
          return { ...errors, shifts, button };
        } else if (state.shifts && !state.name) {
          button = true;
          return { ...errors, shifts, button };
        } else return { ...errors, shifts, button };
      }
      default: {
        return errors;
      }
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(
      createCourse({
        createCourse: { ...state, schoolId: userSchool._id },
        accessToken: userSession.accessToken,
      })
    );

    dispatch(
      getSchoolById({
        schoolId: userSchool._id,
        accessToken: userSession.accessToken,
      })
    );

    setState({
      name: "",
      shifts: "",
      students: [],
      teachers: [],
      subjects: [],
    });
    setList({
      students: [],
      teachers: [],
      subjects: [],
    });
    alert("Curso creado con exito");
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    let result = { ...state, [name]: value };
    setState(result);

    setErrors(validate(result, name));
  };

  const handleSelect = (e: any, type: string) => {
    let id = e.target ? e.target.value : e;
    if (type === "students" || type === "subjects" || type === "teachers") {
      if (state[type].includes(id))
        alert(`El/La ${englishToSpanish(type)} ya se encuentra en lista`);
      else {
        setState({
          ...state,
          [type]: [...state[type], id],
        });
        let object = userSchool[type].filter(
          (elemento: any) => elemento._id === id
        );
        setList({ ...list, [type]: [...list[type], ...object] });
      }
      e.target ? (e.target.value = "default") : (id = undefined);
    }
  };

  const englishToSpanish = (type: string) => {
    switch (type) {
      case "students":
        return "estudiante";
      case "teachers":
        return "profesor/a";
      case "subjects":
        return "materia";
    }
  };

  const handleDelete = (id: string, type: string) => {
    if (type === "students" || type === "subjects" || type === "teachers") {
      const filter = state[type].filter((e) => e !== id);
      setState({ ...state, [type]: filter });
      let object = list[type].filter((e: any) => e._id !== id);
      setList({ ...list, [type]: object });
    }
  };

  const handleSearchbar = (e: any) => {
    let { value } = e.target;

    dispatch(
      getUserBy({
        search: {
          userType: "student",
          filter: value.length > 0 ? value : "cancelarBusqueda",
          schoolId: userSchool._id,
        },
        accessToken: userSession.accessToken,
      })
    );
  };

  return {
    handleSubmit,
    handleInputChange,
    handleSelect,
    handleDelete,
    handleSearchbar,
    userSchool,
    matchUsers,
    state,
    list,
    errors,
  };
};

export default useHelper;

/* const handleSelectTeacher = (e: any) => {
    if (state.teachers.includes(e.target.value))
      alert("El profesor se encuentra en lista");
    else {
      setState({ ...state, teachers: [...state.teachers, e.target.value] });
      let objetTeachers = userSchool.teachers.filter(
        (elemento: any) => elemento._id === e.target.value
      );
      setList({ ...list, teachers: [...list.teachers, ...objetTeachers] });
    }
    e.target.value = "default";
  };

  const handleSelectSubjects = (e: any) => {
    if (state.subjects.includes(e.target.value))
      alert("La materia se encuentra en la lista");
    else {
      setState({ ...state, subjects: [...state.subjects, e.target.value] });
      let objetSubject = userSchool.subjects.filter(
        (elemento: any) => elemento._id === e.target.value
      );
      setList({ ...list, subjects: [...list.subjects, ...objetSubject] });
    }
    e.target.value = "default";
  };
 */

/* if (type === "students") {
      const filterStudents = state[type].filter((e) => e !== id);
      setState({ ...state, students: filterStudents });
      let objetStudent = list.student.filter((e: any) => e._id !== id);
      setList({ ...list, student: objetStudent });
    } else if (type === "teacher") {
      const filterTeachers = state.teachers.filter((e) => e !== id);
      setState({ ...state, teachers: filterTeachers });
      let objetTeachers = list.teachers.filter((e: any) => e._id !== id);
      setList({ ...list, teachers: objetTeachers });
    } else if (type === "subject") {
      const filterSubjects = state.subjects.filter((e) => e !== id);
      setState({ ...state, subjects: filterSubjects });
      let objetSubjects = list.subjects.filter((e: any) => e._id !== id);
      setList({ ...list, subjects: objetSubjects });
    } */

/*
    handleSelectTeacher,
    handleSelectSubjects,
*/
