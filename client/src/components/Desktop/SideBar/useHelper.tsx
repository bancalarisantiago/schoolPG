//from modules
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//tipados
import { IState } from "../../../interfaces";
//actions
import { logout } from "../../../redux/actions";

const useHelper = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    true,
  ]);

  const [underline, setUnderline] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [ctime, setctime] = useState<string>("");

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setctime(time);
  };
  useEffect(() => {
    updateTime();
    setInterval(updateTime, 1000);
  }, []);

  const school = useSelector((state: IState) => state.userSchool);

  const handleClick = (e: any) => {
    const { value } = e.currentTarget;
    setShow(
      show.map((m, i) =>
        i === value ? (value === 6 ? (m === false ? !m : m) : !m) : false
      )
    );
  };

  const handleUnderline = (e: any) => {
    const { value } = e.currentTarget;
    setUnderline(underline.map((m, i) => (i === value ? !m : false)));
  };

  const logOut = () => {
    dispatch(logout());
    window.location.reload();
  };

  return {
    show,
    underline,
    school,
    ctime,
    handleUnderline,
    handleClick,
    logOut,
  };
};

export default useHelper;
