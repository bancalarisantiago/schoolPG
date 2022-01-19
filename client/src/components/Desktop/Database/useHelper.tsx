//from modules

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//types
import { ChangeEvent, IState } from "../../../interfaces";
//actions
import { getUserBy } from "../../../redux/actions";

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

  const handleShow = (): void => {
    setShow(!show);
  };

  return { user, matchUsers, show, handleChange, handleShow };
};

export default useHelper;
