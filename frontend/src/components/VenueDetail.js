import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function VenueDetail(props){
     const [venueDetails, setvenueDetails] = useState([])
     debugger
     const url = ''
     const param = useParams()
     console.log('param is ' + param.venueId)
     const details = {
               id: 1,
               name:'The City Stadium',
               description:'With location is city\'s heart, the stadium stands tall in the architrctural design & in the minds of its fans',
               img:'https://i.ibb.co/HBCJj8F/pexels-rfstudio-3886235.jpg',
          }
     
     // useEffect(() => {
     //      fetch(url)
     //      .then(response => response.json())
     //      .then((result) => {

     //      })
     // }, [])
    return(
        <div>
           <Row>
                <Col>Name</Col>
                <Col>{props.id}</Col>
           </Row>
           <Row>
                <Col>Address</Col>
                <Col>{props.venue}</Col>
           </Row>
           <div className='container'>
               <img src={details.img} style={{'width':'18rem','float':'left'}}/>
               <p className='mx-4' style={{'textAlign':'left'}}>{details.description}
               With location is city\'s heart, the stadium stands tall in the architrctural design & in the minds of its fans
               With location is city\'s heart, the stadium stands tall in the architrctural design & in the minds of its fans
               With location is city\'s heart, the stadium stands tall in the architrctural design & in the minds of its fans
               With location is city\'s heart, the stadium stands tall in the architrctural design & in the minds of its fans
               With location is city\'s heart, the stadium stands tall in the architrctural design & in the minds of its fans</p>
           </div>
           {/* <Row>
                <Col>Address Line2</Col>
                <Col>{props.name}</Col>
           </Row>
           <Row>
                <Col>Pincode</Col>
                <Col>{props.name}</Col>
           </Row> */}
        </div>
    )
}