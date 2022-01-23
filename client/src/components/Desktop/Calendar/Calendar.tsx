import useHelper from "./useHelper"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import FormEvent from "../FormEvent/FormEvent";
import axios from "axios";
//import moment from "moment"

//Components
import Button from "../ReusableComponents/Button/Button"
//Styles
import styles from "./Calendar.module.css"

const Calendar: React.FC = () => {
  
  const { calendarRef, eventsDb, setModalOpen, modalOpen, events, onEventAdded } = useHelper();
  
  return (
    <>
    <section>
      
      <div >
        <div className={styles.calendar}>
          <FullCalendar
            ref={calendarRef}
            aspectRatio={1.2}
            plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
            initialView='listWeek'
            events={eventsDb}
            locale="es"
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
        <div>
          <div>
              <img src={"https://upload.wikimedia.org/wikipedia/en/b/bc/Weather_on_iOS.png"}/>
          </div> 
          <Button 
          text="Agregar Evento"
          onClick={() => setModalOpen(true)}/>
        </div>
    </>
  );
};

export default Calendar;
