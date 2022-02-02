import React, { useState } from 'react';
import styles from "./useHelper.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { IState, ISubject } from "../../../interfaces";
import { deleteSubjectById } from '../../../redux/actions';
import axios from 'axios';


const useHelper = () => {
    const dispatch = useDispatch();
    const userSchool = useSelector((state: IState) => state.userSchool);
    const [input, setInput] = useState<ISubject>({
        name: "",
        teachers: [],
        courses: [],
    });
    const handleClick = (id: string) => {
        const subjectDetail = userSchool.subjects.filter((el: any) => el._id === id)
        return subjectDetail.name
    }
    console.log(userSchool)

    const handleDeleteSubject = async (id: any) => {
        dispatch(deleteSubjectById(id))
    }
    function handleDelete(event: any, type: string) {
        const { value } = event.target;
        (type === "teachers" || type === "courses") &&
            setInput({
                ...input,
                [type]: input[type].filter((f: any) => f._id !== value),
            });
    }

    const handleSelect = (event: any, type: string) => {
        let { value } = event.target;

        (type === "courses" || type === "teachers") &&
            !input[type].map((m: any) => m._id === value).includes(true)
            ? input[type].push(userSchool[type].filter((f: any) => f._id === value))
            : alert(`El ${EntoEs(type)} ya esta seleccionado`);

        event.target.value = "default";
        setInput({
            ...input,
            teachers: input.teachers.flat(),
            courses: input.courses.flat(),
        });
    };

    const EntoEs = (type: string) => {
        switch (type) {
            case "courses":
                return "Curso";
            case "teachers":
                return "Profesor";
        }
    };

    function deleteFromList(event: any, type: string) {
        const { value } = event.target;
        (type === "teachers" || type === "courses") &&
            setInput({
                ...input,
                [type]: input[type].filter((f: any) => f._id !== value),
            });
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            axios(`http://localhost:5000/subject/${userSchool.subject._id.input.couses._id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            alert("El curso se creo exitosamente");

        } catch (error) {
            console.log(error);
            alert('No se pudo crear el curso')
        }
    };
    return {
        userSchool,
        handleDelete,
        handleDeleteSubject,
        handleClick,
        deleteFromList,
        handleSelect,
        input,
        handleSubmit
    };
};

export default useHelper;