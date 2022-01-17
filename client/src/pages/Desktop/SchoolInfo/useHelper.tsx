//from modules
import { useSelector } from "react-redux";
//types
import { IState } from "../../../interfaces";

const useHelper = () => {
  const school = useSelector((state: IState) => state.userSchool);

  const totalUsers = (): number => {
    return school
      ? school.admins.length + school.students.length + school.teachers.length
      : " curso no cargado";
  };

  return { school, totalUsers };
};

export default useHelper;
