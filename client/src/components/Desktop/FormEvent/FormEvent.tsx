import { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime"
import axios from "axios";
import Button from "../ReusableComponents/Button/Button"
import { customStyles ,EventProps, useHelper } from "./useHelper"

import styles from "./FormEvent.module.css"

const Event: React.FC<EventProps> = ({isOpen, onClose, onEventAdded, eventCreated}) => {

      const { title, start, setStart, setTitle, end, setEnd } = useHelper();
       
      const onSubmit = async  (event: any) => {
        event.preventDefault();
        onEventAdded({
            title,
            start,
            end,
        })
        onClose()
    }
    return (
        <div className={styles.eventModal}>
            <Modal isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}>
                <form onSubmit={onSubmit} >
                    <input placeholder="Title" value={title} onChange={(e: any) => setTitle(e.target.value)}></input>
                <div>
                    <label>Fecha de Inicio</label>
                <Datetime inputProps={{className:'datetime'}} value={start} onChange={(date:any) => setStart(date)}/>
                </div>
                <div>
                    <label>Fecha de Terminado</label>
                <Datetime inputProps={{className:'datetime'}} value={end} onChange={(date:any) => setEnd(date)}/>
                </div>
                <Button text="Agregar"></Button>
                </form>
            </Modal>
        </div>
    )
}

export default Event