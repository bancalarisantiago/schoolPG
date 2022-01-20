//from modules
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//interfaces
import { IStudentForm, SubmitEvent, IState } from "../../../interfaces";
//actions
import { createUser } from "../../../redux/actions";

const useHelper = () => {
  const dispatch = useDispatch();
  const userSchool = useSelector((state: IState) => state.userSchool);
  const userSession = useSelector((state: IState) => state.userSession);
  const [name, setName] = useState({
    first: "",
    last: "",
  });

  const [input, setInput] = useState<IStudentForm>({
    name: name,
    document: "",
    email: "",
    username: "",
    userType: "student",
    password: "",
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

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const student = {
      ...input,
      name,
      password: input.document,
      schoolId: userSchool._id,
    };

    dispatch(
      createUser({ createUser: student, accessToken: userSession.accessToken })
    );

    setName({ first: "", last: "" });

    setInput({
      name: name,
      document: "",
      email: "",
      username: "",
      userType: "student",
      password: "",
    });
    alert("El alumno fue creado con exito");
  };

  return {
    handleInputChange,
    handleSubmit,
    input,
    name,
    handleNameChange,
  };
};

export default useHelper;
