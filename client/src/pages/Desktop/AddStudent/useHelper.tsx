//from modules
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//interfaces
import { IStudentForm, SubmitEvent, IState } from "../../../interfaces";

import { createUser } from "../../../redux/actions";

const useHelper = () => {
  const dispatch = useDispatch();
  const userSchool = useSelector((state: IState) => state.userSchool);

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

    dispatch(
      createUser({
        ...input,
        password: input.document,
        schoolId: userSchool._id,
      })
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
