//from modules
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//types
import { IState } from "./interfaces";

const useHelper = () => {
  const validate = useSelector((state: IState) => state.userSession);
  const navigate = useNavigate();
  const school = useSelector((state: IState) => state.userSchool);
  return {
    validate,
    navigate,
    school,
  };
};

export default useHelper;
