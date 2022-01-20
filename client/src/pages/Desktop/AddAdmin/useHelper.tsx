import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAdminForm, IState, SubmitEvent } from "../../../interfaces";

import { createUser } from "../../../redux/actions";

const useHelper = () => {
  const dispatch = useDispatch();
  const userSession = useSelector((state: IState) => state.userSession);
  const userSchool = useSelector((state: IState) => state.userSchool);
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
    const admin = {
      ...input,
      name,
      password: input.document,
      schoolId: userSchool._id,
    };

    dispatch(
      createUser({ createUser: admin, accessToken: userSession.accessToken })
    );

    setInput({
      name: name,
      document: "",
      email: "",
      username: "",
      userType: "admin",
      password: "",
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
    handleNameChange,
  };
};

export default useHelper;
