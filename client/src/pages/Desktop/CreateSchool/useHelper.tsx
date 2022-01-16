import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { IState } from "../../../interfaces";

const useHelper = () => {
  const school = useSelector((state: IState) => state.userSession);
  const navigate = useNavigate();

  useEffect(() => {
    if (!school.id) navigate("/panel/general");
  }, []);
};

export default useHelper;
