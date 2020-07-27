import React from 'react';
export default class SingleUser extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email:this.props.email
        }
    }
    render(){
        return (
        <div className='user'>
        <p>firstName: {this.props.firstName}</p>
        <p>lastName: {this.props.lastName}</p>
        <p>email: {this.props.email}</p>
        </div>
        );
    }
}