import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { createEvent, getEvents } from "../../../redux/actions/index"


const useHelper = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState({});
    const calendarRef: any = useRef(null);
    const userId = useSelector((state: any) => state.userSession)
    const eventsDb = useSelector((state: any) => state.events.data)
    const dispatch = useDispatch()
  
    const onEventAdded = async (event: any) => {
      let calendarApi = calendarRef.current.getApi();
      calendarApi.addEvent(event);
      setEvents(event);
      dispatch(createEvent({...event, user: userId.user._id}))
      dispatch(getEvents())
    };
  
      useEffect(()=>{
        dispatch(getEvents())
      },[])
  
return { 
    calendarRef, 
    eventsDb, 
    setModalOpen, 
    modalOpen, 
    events, 
    onEventAdded }
}

export default useHelper