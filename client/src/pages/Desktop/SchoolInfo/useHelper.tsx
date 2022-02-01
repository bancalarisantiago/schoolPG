//from modules
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//types
import { IState } from "../../../interfaces";
import { deleteCourseById, getSchoolById } from "../../../redux/actions";

const useHelper = () => {
  const userSession = useSelector((state: IState) => state.userSession);
  const school = useSelector((state: IState) => state.userSchool);
  const dispatch = useDispatch();
  const totalUsers = (): number => {
    return school
      ? school.admins.length + school.students.length + school.teachers.length
      : " curso no cargado";
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=alerts&appid=1903d69493c217289bc04bd041e51166`
        );
        console.log(data);
      });
    }
  }, []);

  async function deleteCourse(id: any, name: string) {
    if (window.confirm(`Desea eliminar a ${name}? `) === true) {
      let erase = "El curso ha sido eliminado permanentemente de la base datos";
      dispatch(
        deleteCourseById({
          id,
          schoolId: userSession.user.school,
          accessToken: userSession.accessToken,
        })
      );
      alert(erase);
    }
    dispatch(
      getSchoolById({
        schoolId: userSession.user.school,
        accessToken: userSession.accessToken,
      })
    );
  }

  return { school, totalUsers, deleteCourse };
};

export default useHelper;
