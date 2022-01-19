//from modules

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//types
import { ChangeEvent, IState } from "../../../interfaces";
//actions
import { getUserBy , deleteUserById, getSchoolById} from "../../../redux/actions";

const useHelper = (schoolType: string) => {
  const dispatch = useDispatch();
  const userSchool = useSelector((state: IState) => state.userSchool);
  const [user, setUser] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  

  const handleChange = async (e: ChangeEvent) => {
    const { value } = e.currentTarget;
    setUser(value);

    dispatch(
      getUserBy({
        userType: schoolType.substring(0, schoolType.length - 1),
        filter: value.toLocaleLowerCase(),
        schoolId: userSchool._id,
      })
    );
  };
  const matchUsers = useSelector((state: IState) => state.matchUsers);
  
 async function confirmDelete (event: any) {
    let erase;
    const userNameAndId = event.target.id.split("/")
      
    if(window.confirm(`Desea eliminar a ${userNameAndId[0]}? `) === true) {
      erase = "El usuario ha sido eliminado de la base datos"
      dispatch(deleteUserById(userNameAndId[1]))
      alert(erase)
    } 
    dispatch(getSchoolById(userSchool._id))
  }

  return { user, matchUsers, show, handleChange , confirmDelete};
};

export default useHelper;
