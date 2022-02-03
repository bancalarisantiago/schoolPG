import Modal from "react-modal";
import Datetime from "react-datetime";
import Button from "../ReusableComponents/Button/Button";
import { customStyles, EventProps, useHelper } from "./useHelper";

import styles from "./FormEvent.module.css";

const Event: React.FC<EventProps> = ({
  isOpen,
  onClose,
  onEventAdded,
  eventCreated,
}) => {
  const { title, start, setStart, setTitle, end, setEnd } = useHelper();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    onEventAdded({
      title,
      start,
      end,
    });
    onClose();
    setStart(new Date());
    setEnd(new Date());
    setTitle("");
  };

  if (isOpen) document.body.classList.add("no-scroll");

  return (
    <div className={styles.eventModal}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        /* className={styles.a} */
        style={customStyles}
      >
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            className={styles.input}
            placeholder="Nombre del evento"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          ></input>
          <div className={styles.div}>
            <div className={styles.dateCont}>
              <label className={styles.label}>Fecha de Inicio</label>
              <Datetime
                inputProps={{ className: "datetime" }}
                value={start}
                onChange={(date: any) => setStart(date)}
                className={styles.date}
              />
            </div>
            <div className={styles.dateCont}>
              <label className={styles.label}>Fecha de Terminado</label>
              <Datetime
                inputProps={{ className: "datetime" }}
                value={end}
                onChange={(date: any) => setEnd(date)}
              />
            </div>
          </div>
          <div className={styles.but}>
            <Button text="Agregar"></Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Event;
