
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITeacherForm, SubmitEvent } from "../../../interfaces";
import { IState } from "../../../interfaces/index";
import { createUser } from "../../../redux/actions";


const useHelper = () => {
  const dispatch = useDispatch();

  const userSchool: any = useSelector<IState>(
    (state: IState) => state.userSchool
  );

  const [name, setName] = useState({
    first: "",
    last: "",
  });

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
    setInput({ ...input, name });
  };

  function handleInputOnChangeList(event: any) {
    const { name, value } = event.target;

    if (name === "courses") {
      if (!input.courses.map((m: any) => m.name === value).includes(true)) {
        input.courses.push(
          userSchool.courses.filter((m: any) => m.name === value)
        );
      } else {
        alert("El curso ya esta seleccionado");
      }
    }
    if (name === "subjects") {
      if (!input.subject.map((m: any) => m.name === value).includes(true)) {
        input.subject.push(
          userSchool.subjects.filter((m: any) => m.name === value)
        );
      } else {
        alert("La materia ya esta seleccionada");
      }
    }
    setInput({
      ...input,
      subject: input.subject.flat(),
      courses: input.courses.flat(),
    });
    event.target.value = "default";
  }

  function deleteFromList(event: any) {
    if (
      input.courses
        .map((m: any) => m.name === event.target.value)
        .includes(true)
    ) {
      let copy = input.courses.filter(
        (p: any) => p.name !== event.target.value
      );
      setInput({ ...input, courses: copy });
    }
    if (
      input.subject
        .map((m: any) => m.name === event.target.value)
        .includes(true)
    ) {
      let copy = input.subject.filter((g: any) => g.name !== event.target.value);
      setInput({ ...input, subject: copy });
    }
  }
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const teacher = {
      ...input,
      password: input.document,
      schoolId: userSchool._id,
    };
    dispatch(createUser(teacher));

    alert("El profesor se creo de manera exitosa");
    setInput({
      name: name,
      document: "",
      email: "",
      username: "",
      userType: "teacher",
      password: "",
      courses: [],
      subject: [],
    });
    setName({
      first: "",
      last: "",
    });
  };

  return {
    handleInputChange,
    handleSubmit,
    input,
    name,
    userSchool,
    handleNameChange,
    handleInputOnChangeList,
    deleteFromList,
  };
};

export default useHelper;
