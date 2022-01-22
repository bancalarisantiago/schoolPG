import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { createEvent } from "../../../redux/actions/index"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FormEvent from "../FormEvent/FormEvent";
import axios from "axios";
//import moment from "moment"

//Components
import Button from "../ReusableComponents/Button/Button"

const Calendar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState({});
  const calendarRef: any = useRef(null);
  const userId = useSelector((state: any) => state.userSession)
  const dispatch = useDispatch()

  const onEventAdded = async (event: any) => {
    let calendarApi = calendarRef.current.getApi();
    const { title, end, start } = event;
    calendarApi.addEvent(event);
    setEvents(event);
    dispatch(createEvent({...event, user: userId.user._id}))
    
    
  };
  const eventoPrueaba = [ {
       title: 'Prueba 1',
       start: '2022-01-21T17:53:54.057Z',
       end: '2022-01-21T17:53:54.057Z'
     },{
      title: 'Prueba 2',
      start: '2022-01-21T17:53:54.057Z',
      end: '2022-01-21T17:53:54.057Z'
    } ]

  const handleEventAdd = async function (events: any) {

      
    //await axios.post("http://localhost:5000/api/event", events);
  };

  const handleDateSet = async function (data: any) {

   
    const response = await axios.get("http://localhost:5000/api/event");
  };

  return (
    <section>
      <Button 
      text="Agregar Evento"
      onClick={() => setModalOpen(true)}/>
      <div style={{ position: "relative", zIndex: 0 }}>
        <div>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            eventAdd={(event) => handleEventAdd(event)}
            datesSet={(date: any) => handleDateSet(date)}
            themeSystem="bootstrap"
          />
        </div>
      </div>
      <FormEvent
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={(event: any) => onEventAdded(event)}
        eventCreated={events}
      />
    </section>
  );
};

export default Calendar;
