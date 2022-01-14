//from modules
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//types
import { IState } from "../../../interfaces";

const useHelper = () => {
  const validate = useSelector((state: IState) => state.userSession);
  const navigate = useNavigate();
  useEffect(() => {
    !validate.accessToken && navigate("/login");
  }, [navigate, validate.accessToken]);
  return {};
};

export default useHelper;
