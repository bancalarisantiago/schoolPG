
import { useState, useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { ITeacherForm,  SubmitEvent } from "../../../interfaces"
import { IState } from "../../../interfaces/index"
import { createTeacher } from "../../../redux/actions"

const useHelper = () => {

    const dispatch = useDispatch();
    const courseState: any = useSelector<IState>((state:any) => state.userSchool.courses)
    const subjectState: any = useSelector((state: any) => state.subjects)
    const [ name, setName ] = useState({
        first: "",
        last: ""
    })

    const [input, setInput] = useState<ITeacherForm>({
      name: name,
      document: "",
      email: "",
      username: "",
      userType: "teacher",
      password: "",
      courses: [],
      subject: [],

    });

    const handleInputChange = (e: any) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    };

    const handleNameChange = (e: any) => {
        setName({
          ...name,
          [e.target.name]: e.target.value,
        });
        setInput({...input, name})
      };

     

    function handleInputOnChangeList (event: any) {
      const { name, value } = event.target;
    
      if(name === 'courses') {
        if(!input.courses.includes(value)) {
          input.courses.push(value)
        }
      }
      if(name === 'subjects') {
        if(!input.subject.includes(value)) {   
          input.subject.push(value)
        }
      }
      event.target.value = "default"
      setInput({...input})
    }

    function deleteFromList(event:any) {
          
      if(input.courses.includes(event.target.value)) {
        let copy = input.courses.filter((p:any) => p !== event.target.value)
        setInput({...input, courses : copy})
      }
      if(input.subject.includes(event.target.value)) {
        let copy = input.subject.filter((g:any) => g !== event.target.value)
        setInput({...input, subject : copy})
      }
  }
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const teacher = {...input, password : input.document}   
    dispatch(createTeacher(teacher));
  };

    return {
        handleInputChange,
        handleSubmit,
        input,
        name,
        handleNameChange,
        handleInputOnChangeList,
        deleteFromList,
        courseState,
        subjectState,
    }
}

export default useHelper