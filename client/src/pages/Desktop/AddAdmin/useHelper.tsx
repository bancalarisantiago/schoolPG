import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IAdminForm, SubmitEvent } from "../../../interfaces";

import { createUser } from "../../../redux/actions";

const useHelper = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState({
    first: "",
    last: "",
  });

  const [input, setInput] = useState<IAdminForm>({
    name: name,
    document: "",
    email: "",
    username: "",
    userType: "admin",
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
    const admin = { ...input, password: input.document };

    dispatch(createUser(admin));
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
