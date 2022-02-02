import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { IState, IStateAddCourse, IListState } from "../../../interfaces/index"
import { modifyCourse } from "../../../redux/actions/index"
import axios from "axios"


const useHelper = () => {

    const { id } = useParams();
    const userSession = useSelector((state: IState) => state.userSession);
    const { students, teachers, subjects } = useSelector((state: IState) => state.userSchool);
    const dispatch = useDispatch()
    const [state, setState] = useState<IStateAddCourse>({
      name: "",
      shifts: "",
      students: [],
      teachers: [],
      subjects: [],
    });
  
    const [list, setList] = useState<IListState>({
      students: state.students,
      teachers: state.teachers,
      subjects: state.subjects,
    });
  

useEffect(() => {
    fetchData();
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:5000/api/course/${id}`
      );
      setState(data)
      setList({
        students: data.students,
        teachers: data.teachers,
        subjects: data.subjects
      })  
    }
    
  }, []);

 


  const handleChange = (e: any) => {
    const { name, value } = e.target;
   
    setState({
      ...state,
      [name]: value,
    });
    //setErrors(validate({ ...state, [name]: value }, name));

  };
  
  function handleInputOnChangeList(event: any) {
    const { name, value } = event.target;
   
    if (name === "students") {
      if (!list.students.map((m: any) => `${m.name.first} ${m.name.last}`  === value).includes(true)) {
        list.students.push(
          students.find((m: any) => `${m.name.first} ${m.name.last}`  === value)
        );
      } else {
        alert("El estudiante ya esta seleccionado");
      }
    }
    if (name === "subjects") {
      if (!list.subjects.map((m: any) => m.name === value).includes(true)) {
        list.subjects.push(
          subjects.find((m: any) => m.name === value)
        );
      } else {
        alert("La materia ya esta seleccionada");
      }
    }
    if (name === "teachers") {
      if (!list.teachers.map((m: any) => `${m.name.first} ${m.name.last}`  === value).includes(true)) {
        list.teachers.push(
          teachers.find((m: any) => `${m.name.first} ${m.name.last}`  === value)
        );
      } else {
        alert("El profesor ya esta seleccionada");
      }
    }
    setList({
      ...list,
      subjects: list.subjects.flat(),
      students: list.students.flat(),
      teachers: list.teachers.flat()
    });
    setState({
      ...state,
      subjects: list.subjects.flat(),
      students: list.students.flat(),
      teachers: list.teachers.flat()
    });
    event.target.value = "default";
    
    
  }

  function deleteFromList(event: any) {
      
    if (
      list.students
        .map((m: any) => m._id === event.target.value)
        .includes(true)
    ) {
      let copy = list.students.filter(
        (p: any) => p._id !== event.target.value
      );
      setList({ ...list, students: copy });
      
    }
    if (
      list.teachers
        .map((m: any) => m._id === event.target.value)
        .includes(true)
    ) {
      let copy = list.teachers.filter(
        (g: any) => g._id !== event.target.value
      );
      setList({ ...list, teachers: copy });
    }
    if (
      list.subjects
        .map((m: any) => m.name === event.target.value)
        .includes(true)
    ) {
      let copy = list.subjects.filter(
        (g: any) => g.name !== event.target.value
      );
      
      setList({ ...list, subjects: copy.flat() });
      
    }
    
    setState({
      ...state,
      subjects: list.subjects.flat(),
      students: list.students.flat(),
      teachers: list.teachers.flat()
    });
    
    
  }

  
    function  handleOnSubmit (e:any)  {
        e.preventDefault();
      
        
        let stateUpdate = {
          ...state,
          subjects: list.subjects,
          students: list.students,
          teachers: list.teachers
        }
        
        
      dispatch(modifyCourse({
        id: id,
        accessToken: userSession.accessToken,
        course: stateUpdate}))
       
       
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
          subjects: []
        })  
    }


  
  return {
      list,
      students,
      teachers,
      subjects,
      state,
      handleChange,
      deleteFromList,
      handleOnSubmit,
      handleInputOnChangeList
  }
}

export default useHelper;