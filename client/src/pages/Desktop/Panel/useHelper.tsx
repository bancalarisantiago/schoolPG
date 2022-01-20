//from modules
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSchoolById } from "../../../redux/actions";
import { useLocation } from "react-router-dom";
/* import jwt_decode, { JwtPayload } from "jwt-decode";
import axios from "axios"; */
//types
import { IState } from "../../../interfaces";

const useHelper = () => {
  const location: any = useLocation().pathname;
  const dispatch = useDispatch();
  const validate = useSelector((state: IState) => state.userSession);
  const navigate = useNavigate();
  const [showSidebar, setShowSideBar] = useState<boolean>(false);

  useEffect(() => {
    !validate.accessToken && navigate("/login");
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
  }, [navigate, validate, dispatch, validate.accessToken]);

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
