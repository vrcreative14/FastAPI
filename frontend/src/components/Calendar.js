
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';
import { useState } from 'react';


export default function DateSelector(props){
    const [dateState, setDateState] = useState(null)
    const [calendarVisible, setcalendarVisibility] = useState(false)
    // change date method
    const changeDate = (e) => {
        debugger
            setDateState(e.toDateString())
            setcalendarVisibility(false)
    }
    const handleInputClick = () => {
        debugger
        if(!dateState){
        let d = new Date().toDateString()
        setDateState(d)
        }
        setcalendarVisibility(true)
    }
    return(
        <div>
            {/* <input type='date' className='form-control'/> */}
            { !dateState ? <input className='form-control' onClick={handleInputClick}/> :
            <>
            <input id="date-calendar" className='form-control' value={dateState} onClick={handleInputClick}/>
            { calendarVisible &&
            <Calendar value={dateState} date={dateState} onChange={changeDate} display={calendarVisible}/>
            }
            </>
    }
        </div>
    )
}