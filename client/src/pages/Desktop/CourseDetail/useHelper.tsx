//from modules
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//actions
import { deleteUserById, deleteSubjectById } from "../../../redux/actions";
//interfaces
import { ICourses, IState } from "../../../interfaces";

const useHelper = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [course, setCourse] = useState<ICourses>();
  const userSession = useSelector((state: IState) => state.userSession);
  const userSchool = useSelector((state: IState) => state.userSchool);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:5000/api/course/${courseId}`
      );
      setCourse(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSchool]);

  const confirmDelete = async (id: any, first: any, last: any) => {
    if (window.confirm(`Desea eliminar a ${first} ${last}? `) === true) {
      let erase = "El usuario ha sido eliminado de la base datos";
      dispatch(deleteUserById({ id, accessToken: userSession.accessToken }));
      alert(erase);
    }
    const { data } = await axios.get(
      `http://localhost:5000/api/course/${courseId}`
    );
    setCourse(data);
  };

  const deleteSubject = async (id: string, name: string) => {
    if (
      window.confirm(`Desea eliminar ${name} de forma permanente? `) === true
    ) {
      let erase = "La materia ha sido eliminada de la base datos";
      dispatch(
        deleteSubjectById({
          schoolId: userSession.user.school,
          id: id,
          accessToken: userSession.accessToken,
        })
      );
      alert(erase);
    }
    const { data } = await axios.get(
      `http://localhost:5000/api/course/${courseId}`
    );
    setCourse(data);
  };

  return { course, navigate, confirmDelete, deleteSubject };
};
export default useHelper;
