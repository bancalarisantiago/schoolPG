import useHelper from "./useHelper"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import FormEvent from "../FormEvent/FormEvent";
import axios from "axios";
//import moment from "moment"
import {useState, useEffect} from "react"
//Components
import Button from "../ReusableComponents/Button/Button"
//Styles
import styles from "./Calendar.module.css"


const Calendar: React.FC = () => {
  
const { calendarRef, eventsDb, setModalOpen, modalOpen, events, onEventAdded } = useHelper();


const [ option, setOption ] = useState("dayGridMonth");


useEffect(() => {
 
},[option])

function handleOptionChange (event: any) {
  setOption(event.target.value)
 event.target.value = "default"
}

  
  return (
    < div className={styles.wrapper}>
    <section>
      
      <div >
        <div className={styles.calendar}>
          {option !== "listWeek" && option !== "dayGridWeek" ?
        
              <FullCalendar
                ref={calendarRef}
                aspectRatio={2}
                plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                events={eventsDb}
                initialView={`${option}`}
                locale="es"
                themeSystem="bootstrap"
              />
             : null }
             
             {option !== "dayGridMonth" &&  option !== "listWeek" ? 
                  <FullCalendar
                  ref={calendarRef}
                  aspectRatio={2}
                  plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                  events={eventsDb}
                  initialView={`${option}`}
                  locale="es"
                  themeSystem="bootstrap"
                />
             : null} 
             {option !== "dayGridMonth" &&  option !== "dayGridWeek" ? 
             <FullCalendar
                ref={calendarRef}
                aspectRatio={2}
                plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                events={eventsDb}
                initialView={`${option}`}
                locale="es"
                themeSystem="bootstrap"
              /> : null}
        </div>
      </div>
      <FormEvent
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={(event: any) => onEventAdded(event)}
        eventCreated={events}
      />
      
    </section>  
          <div className={styles.buttonsContainer}>
                <div className={styles.select}>
                  <select defaultValue="default" onChange={handleOptionChange}>
                    <option value="default" disabled>Seleccionar Vista</option>
                    <option value="dayGridMonth">Mes</option>
                    <option value="listWeek">Dia</option>
                    <option value="dayGridWeek">Semana</option>
                  </select>
                  </div>  
          <Button 
          text="Agregar Evento"
          onClick={() => setModalOpen(true)}/>
        </div>
    </div>
  );
};

export default Calendar
