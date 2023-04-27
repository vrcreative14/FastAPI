import { useEffect, useState } from "react"
//import Calendar from "react-bootstrap/Calendar"
import Calendar from "./Calendar"
import Clock from "./Clock"
import Select from 'react-select' 
import Button from "react-bootstrap/Button"
const url = 'http://127.0.0.1:8000/event/'
const venueUrl = 'http://127.0.0.1:8000/event/venues/'
const participantUrl = 'http://127.0.0.1:8000/event/participants/'
const submitUrl = 'http://127.0.0.1:8000/event/add/'

export default function Event(props){
    const [events, setEvents] = useState([])
    const [venues, setVenues] = useState([])
    const [participants, setParticipants] = useState([])
    const [isLoading, setLoading] = useState(false)
    const formData = []
    useEffect(() => {
        fetch(venueUrl)
        .then(response => response.json())
        .then((result) => {
            console.log(result)
            setVenues(result)
        })
    },[])

    useEffect(() => {
        fetch(participantUrl)
        .then(response => response.json())
        .then((result) => {
            let arr = []
            debugger
            result.map(val => 
                arr.push({value:val.id, label:val.profile.user.name})
            )
            setParticipants(arr)
        })
    },[])

    const VenueOptions = venues.map(v => <option value={v.id}>{v.name}</option>)

    function handleSubmit(){
        setLoading(true)
        fetch(submitUrl, 
            {
            method: 'POST',
            body:JSON.stringify({})
        })
        .then(response => response.json())
        .then(result => {
            debugger
            console.log(result)
            setLoading(false)
        })
    }

    const createEvent = <div className="form">
        <div className='row p-2'>
            <div className='col-md-2'>Event Name</div>
            <div className='col-md-3'><input className="form-control"/></div>
            <div className='col-md-2'>Select Date</div>
            <div className='col-md-3'><Calendar/></div>
        </div>
        
        <div className='row p-2'>
        <div className='col-md-2'>Select Time</div>
            <div className='col-md-3'><Clock/></div>
            <div className='col-md-2'>Venue</div>
            <div className="col-md-3">
            <select className="form-control">
                {VenueOptions}
            </select>
            </div>
            {/* <div className='col-md-3'><input className="form-control"/></div> */}
        </div>
        <div className='row p-2'>
            <div className="col-md-2">Add Participants</div>
            <div className="col-md-3"><Select options={participants} isMulti/></div>
        </div>
            <br/>
            <Button disabled={isLoading} onClick={handleSubmit} className="mx-5">{isLoading ? 'Loading...' : 'Create Event'}</Button>
        
        
    </div>

    const eventList = events.map(event => <tr>
        <td>{event.name}</td>
        <td>{'Online' ? !event.venue : event.venue}</td>
        <td>{event.date} {event.time}</td>
        <td></td>
    </tr>)
    return(
        <div className="container">
            <h4 className="mx-5">Current Events</h4>
            <table className="table table-striped">
                <thead>
                    <th>Event Name</th>
                    <th>Venue</th>
                    <th>Date & Time</th>
                </thead>
            <tbody>
                {eventList}
            </tbody>

            </table>
            {createEvent}
        </div>
        
    )
}