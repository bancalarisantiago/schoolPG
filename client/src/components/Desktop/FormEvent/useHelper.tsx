

import { useState } from "react"

 export interface EventProps {
    isOpen: any;
    onClose: any;
    onEventAdded: any;
    eventCreated: any;
}

export const customStyles = {
    content: {
      
    zIndex: "2",
    backgroundColor: "white",
    margin: "0 auto",
    top: "25%",
    right: "-50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "240px",
    height: "250px",
   
    },
  };


export const useHelper = () => {

  const [title, setTitle] = useState("")
  const [start, setStart] = useState(new Date())
  const [end, setEnd] = useState(new Date())

  return {  
      title, 
      start, 
      setStart, 
      setTitle, 
      end, 
      setEnd }

}