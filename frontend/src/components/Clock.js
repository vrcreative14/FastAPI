import { useState } from "react";
import { ChevronUp, ChevronDown } from 'react-bootstrap-icons';
export default function Clock(props){
    const [hours, setHours] = useState('05')
    const [minutes, setminutes] = useState('00')

    const changeHour = (event, param) => {
        debugger
        let hourValue = ''
        if (param == 'up'){
            hourValue = hours=='00' ? '23' : (parseInt(hours) - 1).toString()
            hourValue = hourValue.length < 2 ? '0' + hourValue : hourValue
            setHours(hourValue)
            //setHours( + hours.toString() : hours.toString())
        }
        else{
        setHours(hours == '00' ? setHours('24') : (parseInt(hours) + 1).toString())
        }
        console.log('scrolled')
    }
    function changeMinute(e){
        debugger
    }
return(
    props.time ? <></> :
    <div className="row">
        <div className="col-md-4">
        {/* <ChevronUp onClick={event => changeHour(event, 'up')}/> */}
                <input class="form-control" type="number" max="23" min="0" />
        {/* <ChevronDown onClick={event => changeHour(event, 'down')}/> */}
        </div>
        :
        <div className="col-md-4" onScroll={changeMinute}>
        {/* <ChevronUp onClick={changeMinute}/> */}
                <input class="form-control" type="number" max="60" min="0" />
        {/* <ChevronDown /> */}
        </div>
    </div>
)
}