// import Card from './Card'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card'
import Card from './Card';

export default function(props){
    const sports = [
        {'id':1, 'name':'Soccer', img:'https://i.ibb.co/HBCJj8F/pexels-rfstudio-3886235.jpg'},
        {'id':2, 'name':'Volleyball', img:''},
        {'id':3, 'name':'Tennis',img:'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_Racket_and_Balls.jpg'},
        {'id':4, 'name':'Badminton',img:''},
        {'id':5, 'name':'Cricket',img:''},
    ]
    const items = sports.map(s =>
        <Card name={s.name} image={s.img} href='' />
    );
    const [counter, setCounter] = useState(0)
    function handleClick(){
        setCounter(counter + 1)
    }
    return(
        <div>
            
        </div>
        // <div className='card-container' onClick={handleClick}>
        //     {counter}
        //     {items}
        // </div>
        // <Container>
        //     <div className='d-flex'>
        //     <Card className='mx-2'>1</Card>
        //     <Card>2</Card>
        //     </div>
        // </Container>
    )
}