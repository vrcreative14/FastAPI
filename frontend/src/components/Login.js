import React from "react";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";



export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {isLoading: false}
    }

    componentDidMount(){
        
    }

    componentWillUnmount(){
        
    }

    handleClick = () => {
        this.setState({
            isLoading: true
        })
    }
    
    render(){
        
        const buttonText = this.state.isLoading ? <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  : 'Submit'
        const postLogin = () => {
                fetch('')
        }
        return(
            // <div>
            //     <Button name={'Login'} onclick={postLogin}/>
            // </div>
            <div className="container-fluid">
            
        <div className="mx-auto">
        <Row className="mx-auto">
          <Col xs lg="4" md='4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
       
      </Form.Group>
      </Col>
      
      </Row>
      <Row>
        <Col lg='4'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit" onClick={this.handleClick}>
        {buttonText}
      </Button>
    </div>
      
    </div>
    
        )
    }

}