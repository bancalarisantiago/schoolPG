import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FormEvent from "../FormEvent/FormEvent";
import axios from "axios";
//import moment from "moment"

const Calendar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef: any = useRef(null);

  const onEventAdded = (event: any) => {
    let calendarApi = calendarRef.current.getApi();

    calendarApi.addEvent(event);
    setEvents(event);
  };

  const handleEventAdd = async function (event: any) {
    await axios.post("http://localhost:5000/api/event", events);
  };

  const handleDateSet = async function (data: any) {
    const response = await axios.get("http://localhost:5000/api/event");
  };

  return (
    <section>
      <button onClick={() => setModalOpen(true)}>Add Event</button>
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
      />
    </section>
  );
};

export default Calendar;
