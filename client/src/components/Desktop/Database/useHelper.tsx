//from modules
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
//types
import { ChangeEvent, IState } from "../../../interfaces";
//actions
import {
  getUserBy,
  deleteUserById,
  getSchoolById,
} from "../../../redux/actions";

const useHelper = (schoolType: string, textInput?: any) => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const userSession = useSelector((state: IState) => state.userSession);
  const userSchool = useSelector((state: IState) => state.userSchool);
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    textInput.current.value = "";
    search("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleChange = async (e: ChangeEvent) => {
    const { value } = e.currentTarget;
    setUser(value);
    search(value);
  };

  const search = (value: string) => {
    try {
      return dispatch(
        getUserBy({
          search: {
            userType: schoolType.substring(0, schoolType.length - 1),
            filter: value.toLocaleLowerCase(),
            schoolId: userSchool._id,
          },
          accessToken: userSession.accessToken,
        })
      );
    } catch (e) {
      //console.log(e);
    }
  };

  const matchUsers = useSelector((state: IState) => state.matchUsers);

  async function confirmDelete(id: any, first: any, last: any) {
    if (window.confirm(`Desea eliminar a ${first} ${last}? `) === true) {
      let erase = "El usuario ha sido eliminado de la base datos";
      dispatch(deleteUserById({ id, accessToken: userSession.accessToken }));
      alert(erase);
    }
    dispatch(
      getSchoolById({
        schoolId: userSchool._id,
        accessToken: userSession.accessToken,
      })
    );
  }

  return { user, matchUsers, handleChange, confirmDelete };
};

export default useHelper;
