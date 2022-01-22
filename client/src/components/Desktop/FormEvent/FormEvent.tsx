import { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime"
import axios from "axios";
interface EventProps {
    isOpen: any;
    onClose: any;
    onEventAdded: any;
    eventCreated: any;
}


const Event: React.FC<EventProps> = ({isOpen, onClose, onEventAdded, eventCreated}) => {

        const [title, setTitle] = useState("")
        const [start, setStart] = useState(new Date())
        const [end, setEnd] = useState(new Date())
        


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
        <Modal isOpen={isOpen}
        onRequestClose={onClose}>
            <form onSubmit={onSubmit} >
                <input placeholder="Title" value={title} onChange={(e: any) => setTitle(e.target.value)}></input>
            <div>
                <label>Start Date</label>
            <Datetime value={start} onChange={(date:any) => setStart(date)}/>
            </div>
            <div>
                <label>End Date</label>
            <Datetime value={end} onChange={(date:any) => setEnd(date)}/>
            </div>
            <button>Add Event</button>
            </form>
        </Modal>
    )
}

export default Event