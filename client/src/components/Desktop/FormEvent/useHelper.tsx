import { useState } from "react";

export interface EventProps {
  isOpen: any;
  onClose: any;
  onEventAdded: any;
  eventCreated: any;
}

export const customStyles = {
  content: {
    zIndex: "10",
    opacity: "1",
    backgroundColor: "white",
    margin: "0 auto",
    top: "25%",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "490px",
    height: "450px",
    borderRadius: "20px",
    boxShadow: "3px 3px 15px gray",
  },
};

export const useHelper = () => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  return {
    title,
    start,
    setStart,
    setTitle,
    end,
    setEnd,
  };
};
