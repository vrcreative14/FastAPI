import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card';
import VenueDetail from './VenueDetail';
import { useNavigate } from 'react-router-dom';
//const url = 'http://127.0.0.1:8000/event/venues/'
const url = 'http://ip172-18-0-36-ch4l8j01k7jg00atgnvg-8000.direct.labs.play-with-docker.com/'



export default function Venues(props){
    const [venueList, setVenueList] = useState([])
    const [venueId, setvenueId] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((result)=>{
            console.log(result)
            debugger
            setVenueList(result)
            alert(result)
        })
    },[])
    // useEffect(() => {
    //     alert('Venue changed')
    // }, [venueId])

    const handleVenueClick = (e) => {
        debugger
        console.log(e.currentTarget.id)
        setvenueId(e.currentTarget.id)
        navigate(`/venue/${e.currentTarget.id}`)
    }

    const arr = [
        {
            id: 1,
            name: 'Green Park Stadium',
            address: 'Civil Lines, Kanpur',
            status:'Available',
            img:'https://i.ibb.co/HBCJj8F/pexels-rfstudio-3886235.jpg'
        },
        {
            id: 2,
            name: 'The university ground',
            address: 'Awadhpuri, Kanpur',
            status:'Available',
            img:'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_Racket_and_Balls.jpg'
        }
    ]

    const venueDetail = <>
    
    </>

    const venues = venueList.map(venue => 
        // <div key={venue.id}>
        //     {/* {console.log(venue)}
        //     <div>{venue.name}</div>
        //     <div>{venue.address}</div>
        //     <div>{venue.img}</div> */}
        // </div>
        <Card key={venue.id} title={venue.name} text={venue.address} id={venue.id}
        image={'https://i.ibb.co/HBCJj8F/pexels-rfstudio-3886235.jpg'} 
        handleCardClick={handleVenueClick} />
    
        // <div key={venue.id} className="card">
        //     <img src={venue.images[0].img} className='card-img-top' alt="" style={{'height':'150px', 'width':'200px'}}/>
        //     <div className="card-body">
        //         <p>{venue.name}</p>
        //         <Button>Click</Button>
        //     </div>
        // </div>
    )

    

    return(
        // <div className="row">
        //     Test
        //    {venues}
        // </div>
        <div className='d-flex'>

        {venueId ?
        <VenueDetail venue={venueList} id={venueId}/>
         : 
         venues}
        {/* <Row>
           
                <Col> 1 of 1</Col>
                <Col> 2 of 2</Col>
                <Col> 3 of 3</Col>
            </Row>
            <Row>
                <Col> 1 of 1</Col>
                <Col> 2 of 2</Col>
                <Col> 3 of 3</Col>
            </Row> */}
        </div>
            
            
        
    )
}