//from modules
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//tipados
import { IState } from "../../../interfaces";

const useHelper = () => {
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
  return { show, underline, school, ctime, handleUnderline, handleClick };
};

export default useHelper;
