
import { useState, useEffect } from "react";
import {  useDispatch } from "react-redux";
import { IStudentForm,  SubmitEvent } from "../../../interfaces"

import { createStudent } from "../../../redux/actions"

const useHelper = () => {

    const dispatch = useDispatch();
    
  
    const [ name, setName ] = useState({
        first: "",
        last: ""
    })

    const [input, setInput] = useState<IStudentForm>({
      name: name,
      document: "",
      email: "",
      username: "",
      userType: "student",
      password: ""
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

    const handleSubmit = async (e: SubmitEvent) => {
      e.preventDefault();
      const student = {...input, password : input.document}
     
      dispatch(createStudent(student));
    };
    

    return {
        handleInputChange,
        handleSubmit,
        input,
        name,
        handleNameChange
    }
}

export default useHelper