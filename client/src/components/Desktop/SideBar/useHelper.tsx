//from modules
import { useState } from "react";

const useHelper = () => {
  const [show, setShow] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
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

  const handleClick = (e: any) => {
    const { value } = e.currentTarget;
    setShow(show.map((m, i) => (i === value ? !m : false)));
  };

  const handleUnderline = (e: any) => {
    const { value } = e.currentTarget;
    setUnderline(underline.map((m, i) => (i === value ? !m : false)));
  };
  return { show, underline, handleUnderline, handleClick };
};

export default useHelper;
