//from modules
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//actions
import { deleteUserById, deleteCourseById } from "../../../redux/actions";
//interfaces
import { ISubject, IState } from "../../../interfaces";

const useHelper = () => {
  const { subjectId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subject, setsubject] = useState<ISubject>();
  const userSession = useSelector((state: IState) => state.userSession);
  const userSchool = useSelector((state: IState) => state.userSchool);

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:5000/api/subject/${subjectId}`
      );
      setsubject(data);
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
      `http://localhost:5000/api/subject/${subjectId}`
    );
    setsubject(data);
  };

  const deleteCourse = async (id: string, name: string) => {
    if (
      window.confirm(`Desea eliminar ${name} de forma permanente? `) === true
    ) {
      let erase = "El curso ha sido eliminada de la base datos";
      dispatch(
        deleteCourseById({
          schoolId: userSession.user.school,
          id: id,
          accessToken: userSession.accessToken,
        })
      );
      alert(erase);
    }
    const { data } = await axios.get(
      `http://localhost:5000/api/subject/${subjectId}`
    );
    setsubject(data);
  };

  return { subject, navigate, confirmDelete, deleteCourse };
};
export default useHelper;
