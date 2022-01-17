//from modules

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//types
import { ChangeEvent, IState } from "../../../interfaces";
//actions
import { getUserBy } from "../../../redux/actions";

const useHelper = (schoolType: string) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<string>("");

  const handleChange = async (e: ChangeEvent) => {
    const { value } = e.currentTarget;
    setUser(value);

    dispatch(
      getUserBy({
        userType: schoolType.substring(0, schoolType.length - 1),
        filter: value.toLocaleLowerCase(),
      })
    );
  };
  const matchUsers = useSelector((state: IState) => state.matchUsers);

  return { user, matchUsers, handleChange };
};

export default useHelper;
