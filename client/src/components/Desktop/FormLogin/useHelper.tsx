//from modules
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//actions
import { getUserByLogin } from "../../../redux/actions";
//types
import { ICredential, SubmitEvent, ChangeEvent } from "../../../interfaces";

const useHelper = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state);
  const [credential, setcredential] = useState<ICredential>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.currentTarget;
    setcredential({
      ...credential,
      [name]: value,
    });
  };

  const handleSubmit = async (e: SubmitEvent): Promise<void> => {
    e.preventDefault();
    dispatch(getUserByLogin(credential));
  };

  return {
    userState,
    credential,
    setcredential,
    handleChange,
    handleSubmit,
  };
};

export default useHelper;
