//from modules
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSchoolById, getUserByLogin } from "../../../redux/actions";
import { useLocation } from "react-router-dom";
/* import jwt_decode, { JwtPayload } from "jwt-decode";
import axios from "axios"; */
//types

const useHelper = () => {
  const location: any = useLocation().pathname;
  const dispatch = useDispatch();
  var user = localStorage.getItem("user" || null);
  const navigate = useNavigate();
  const [showSidebar, setShowSideBar] = useState<boolean>(false);
  const validate = JSON.parse(user || "");

  useEffect(() => {
    !validate.accessToken && navigate("/login");
    dispatch(getUserByLogin(validate));
    validate.accessToken
      ? !validate.user.school
        ? navigate("/panel")
        : dispatch(
            getSchoolById({
              schoolId: validate.user.school,
              accessToken: validate.accessToken,
            })
          )
      : navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShow = () => {
    setShowSideBar(!showSidebar);
  };

  /*   axios.interceptors.request.use(async (config: any) => {
    const decodedToken: any = jwt_decode<JwtPayload>(validate.accessToken);
    let currentDate = new Date();
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      dispatch(refreshToken(validate.refreshToken));
    }
  }); */

  return { validate, location, showSidebar, handleShow };
};

export default useHelper;
