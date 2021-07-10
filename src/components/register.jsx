import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class Register extends Form {
    state = { 
        data: { username: "", password: "", name: ""},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username').email(),
        password: Joi.string().required().label('Password').min(5),
        name: Joi.string().required().label("Name")
    };

    doSubmit = () => {
        //make call
        console.log('submitted');
    };

    render() { 
        return ( 
        <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username", "email")}
                {this.renderInput("password", "Password", "password")}
                {this.renderInput("name", "Name")}
                {this.renderButton("Register")}
            </form>
        </div> 
        );
    }
}
 
export default Register;