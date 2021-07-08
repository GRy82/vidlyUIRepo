import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';
import Form from './common/form';


class Login extends Form {
    state = {
        data: { username: "", password: "" },
        errors: {}
    };
    
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = () => {
        //make call
        console.log('submitted');
    };


    render() { 
        const { data, errors } = this.state;

        return (  
            <div>
                <h1>Login</h1>                    
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        onChange={this.handleChange}
                        label="Username"
                        name="username"
                        value={data.username}
                        error={errors.username}
                    />
                    <Input 
                        onChange={this.handleChange}
                        label="Password"
                        name="password"
                        value={data.password}
                        error={errors.password}
                    />
                    <button 
                        disabled={this.validate()}
                        className="btn btn-primary"
                        >Login
                    </button>
                </form>    
            </div>
        );
    }
}
 
export default Login;