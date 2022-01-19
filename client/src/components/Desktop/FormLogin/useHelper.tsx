//from modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//actions
import { getUserByLogin } from "../../../redux/actions";
//types
import {
  ICredential,
  SubmitEvent,
  ChangeEvent,
  IState,
} from "../../../interfaces";

const useHelper = () => {
  const dispatch = useDispatch();
  const userSession = useSelector((state: IState) => state.userSession);
  const navigate = useNavigate();
  const [credential, setcredential] = useState<ICredential>({
    userInfo: "",
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
    const authLogin = await dispatch(getUserByLogin(credential));

    typeof authLogin !== "string"
      ? navigate("/panel")
      : console.log({ message: "Email or password is invalid" });
  };

  return {
    userSession,
    credential,
    setcredential,
    handleChange,
    handleSubmit,
  };
};

export default useHelper;
