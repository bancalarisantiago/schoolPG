import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../../redux/reducer";
import { getUserByDni, getUsers, createCourse, getSubject } from "../../redux/action/action";

   interface IState{
        name: string
        shifts:string
        students:string[]
        teachers:string[]
        subjects:string[]
    }

    interface IListState{
        student:any[]
        teachers:any[]
        subjects:any[]
    }

const useHelper = ()=>{

    const [stateDni, setStateDni] = useState({
        document: ""
    })

    const [state, setState] = useState<IState>({
        name:"",
        shifts:"",
        students:[],
        teachers:[],
        subjects:[]
    })

    console.log(state)
    const [list, setList] = useState<IListState>({
        student:[],
        teachers:[],
        subjects:[]
    })

    console.log(list)
    const teachers = useSelector((state:IInitialState) => state.teachers)
    const student = useSelector((state:IInitialState) => state.students)  
    const subjects = useSelector((state:IInitialState) => state.subjects)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsers())
        dispatch(getSubject())
    },[dispatch,getUsers, getSubject])

const handleSubmit= (e:any)=>{
    e.preventDefault()
    dispatch(createCourse(state))
}

const handleDniChange = (e:any)=>{
    setStateDni({document: e.target.value})
}

const handleInputChange = (e:any)=>{
    setState({...state, [e.target.name]: e.target.value})
}

const handleSelect =  (e:any)=>{
    if(state.students.includes(e.target.value)) alert("the student is already to list")
    else {
        setState({...state, students:[...state.students, e.target.value]})
        let objetStudent = student.filter((elemento)=> elemento._id === e.target.value)
        console.log(state)
        setList({...list, student: [...list.student, ...objetStudent]})
        console.log(list)
    }
}

const handleSelectTeacher = (e:any)=>{
    if(state.teachers.includes(e.target.value)) alert("the teacher is already to list")
    else{
        setState({...state, teachers:[...state.teachers, e.target.value]})
        let objetTeacers = teachers.filter((elemento)=> elemento._id === e.target.value)
        setList({...list, teachers: [...list.teachers, ...objetTeacers]})
    }
}

const handleSearch = (e:any) =>{
    e.preventDefault()
    dispatch(getUserByDni(stateDni))
}

const handleRefresh = (e:any)=>{
    e.preventDefault()
    dispatch(getUsers())
}

const handleDelete = (result:any) =>{
    const filterStudents = state.students.filter((e)=> e !== result)
    setState({...state, students: filterStudents})
    let objetStudent = list.student.filter((e:any)=> e._id !== result)
    setList({...list, student: objetStudent})
}

const handleDeleteTeacher = (result:any)=>{
    console.log(result)
    const filterTeachers = state.teachers.filter((e)=> e !== result)
    console.log(filterTeachers)
    setState({...state, teachers: filterTeachers})
    let objetTeachers = list.teachers.filter((e:any)=> e._id !== result)
    setList({...list, teachers: objetTeachers})
}

const handleSelectSubjects = (e:any)=>{
    if(state.subjects.includes(e.target.value)) alert("the subject is already to list")
    else{
        setState({...state, subjects:[...state.subjects, e.target.value]})
        let objetTeacers = subjects.filter((elemento)=> elemento._id === e.target.value)
        setList({...list, subjects: [...list.subjects, ...objetTeacers]})
    }
}

const handleDeleteSubject = (result:any) =>{
    const filterSubjects = state.subjects.filter((e)=> e !== result)
    setState({...state, subjects: filterSubjects})
    let objetSubjects = list.subjects.filter((e:any)=> e._id !== result)
    setList({...list, subjects: objetSubjects})
}

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
    list
}
}

export default useHelper