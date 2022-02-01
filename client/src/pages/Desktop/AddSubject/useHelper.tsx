import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState, ISubject } from "../../../interfaces";
import { createSubject } from "../../../redux/actions/index";

const useHelper = () => {
  const dispatch = useDispatch();
  const userSchool = useSelector((state: IState) => state.userSchool);
  const userSession = useSelector((state: IState) => state.userSession);

  interface IValidateError {
    name: string;
    course: string;
    teacher: string;
  }

  const [input, setInput] = useState<ISubject>({
    name: "",
    teachers: [],
    courses: [],
  });

  const [errors, setError] = useState<IValidateError>({
    name: "",
    course: "",
    teacher: "",
  });

  const validate = (input: ISubject) => {
    if (!input.name) {
      errors.name = "Type a name";
    } else if (/ ^ [ a-zA-ZÀ-ÿ \\ s ] { 1,40 } $ /.test(input.name)) {
      errors.name = "Letras y espacios, pueden llevar acentos.";
    }

    if (!input.courses) {
      errors.course = "Type a course";
    } else if (input.courses.length === 0) {
      errors.course = "Tiene que eleguir un curso";
    } else {
      errors.course = "";
    }

    if (!input.teachers) {
      errors.teacher = "Type a Teacher";
    } else if (input.teachers.length === 0) {
      errors.teacher = "Tiene que elegir un profesor";
    } else {
      errors.teacher = "";
    }

    return errors;
  };

  const handleInputChange = (e: any) => {
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      createSubject({
        createSubject: { ...input, schoolId: userSchool._id },
        accessToken: userSession.accessToken,
      })
    );
    setInput({
      name: "",
      courses: [],
      teachers: [],
    });
    alert("La materia se creo exitosamente");
  };

  return {
    handleSubmit,
    handleInputChange,
    handleSelect,
    input,
    deleteFromList,
    userSchool,
    errors,
  };
};

export default useHelper;
