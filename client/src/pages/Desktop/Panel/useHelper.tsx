//from modules
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSchoolById } from "../../../redux/actions";
import { useLocation } from "react-router-dom";
//types
import { IState } from "../../../interfaces";

const useHelper = () => {
  const location: string = useLocation().pathname;
  const dispatch = useDispatch();
  const validate = useSelector((state: IState) => state.userSession);
  const navigate = useNavigate();
  const school = useSelector((state: IState) => state.userSchool);

  useEffect(() => {
    !validate.accessToken && navigate("/login");
    validate.accessToken
      ? !validate.user.school
        ? navigate("/create-school")
        : dispatch(getSchoolById(validate.user.school))
      : navigate("/login");
  }, [navigate, validate.accessToken]);

  return { validate, location, school };
};

export default useHelper;
