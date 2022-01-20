//from modules
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
//actions
import { getUserById } from "../../../redux/actions";
//interfaces
import { IState } from "../../../interfaces";

const useHelper = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userSession = useSelector((state: IState) => state.userSession);
  const userDetail = useSelector((state: IState) => state.userDetail);
  useEffect(() => {
    if (id)
      dispatch(
        getUserById({ userId: id, accessToken: userSession.accessToken })
      );
  }, [dispatch]);

  const userTypeEs = (userTypeEn: string) => {
    switch (userTypeEn) {
      case "student":
        return "Estudiante";
      case "teacher":
        return "Profesor";
      default:
        return "Administrador";
    }
  };

  return { userDetail, userTypeEs };
};

export default useHelper;
