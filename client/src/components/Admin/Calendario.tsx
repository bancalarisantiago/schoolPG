
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendario() {
    const [date, setDate] = useState(new Date());

    return (
        <div >
            <h1 >React Calendar</h1>
            <div >
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
                <span >Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    );
}

export default Calendario;
