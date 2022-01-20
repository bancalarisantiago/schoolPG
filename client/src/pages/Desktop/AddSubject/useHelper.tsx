import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState, ISubject } from "../../../interfaces";
import { createSubject } from "../../../redux/actions/index";
import { useNavigate } from "react-router-dom";

const useHelper = () => {
  const dispatch = useDispatch();
  const userSchool = useSelector((state: IState) => state.userSchool);
  const userSession = useSelector((state: IState) => state.userSession);
  const navigate = useNavigate();

  interface IValidateError {
    name: string;
    course: string;
    teacher: string;
  }

  const [input, setInput] = useState<ISubject>({
    name: "",
    courses: [""],
    teachers: [""],
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
      errors.teacher = "Tiene que eleguir un profesor";
    } else {
      errors.teacher = "";
    }

    return errors;
  };

  const handleInputChange = (e: any): any => {
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

  const handleSelect = (e: any) => {
    const { name, value } = e.target;

    if (name === "courses") {
      if (input.courses.includes(value)) {
      } else {
        input.courses.push(value);
      }
    }
    if (name === "teachers") {
      if (input.teachers.includes(value)) {
      } else {
        input.teachers.push(value);
      }
    }
    setInput({ ...input });
  };

  function handleDelete(el: any) {
    setInput({
      ...input,
      courses: input.courses.filter((curs) => curs !== el),
    });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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
    navigate("/panel/general");
  };

  return {
    handleSubmit,
    handleInputChange,
    handleSelect,
    input,
    handleDelete,
    userSchool,
    errors,
  };
};

export default useHelper;
