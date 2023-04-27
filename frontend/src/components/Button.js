import React from 'react';
import Button from 'react-bootstrap/Button';

export default class AppButton extends React.Component{
    
    render(){
        return(
            <Button className='button'>{this.props.name}</Button>
        )
    }
}