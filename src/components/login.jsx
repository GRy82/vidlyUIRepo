import React, { Component } from 'react';
import Input from './common/input';
import Joi from 'joi-browser';


class Login extends Component {
    state = {
        account: { username: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    };

    validate = () => {
        const { account } = this.state;

        const result = Joi.validate(account, this.schema, { abortEarly: false });
        console.log(result);

        const errors = {};

        if(account.username.trim() === '')
            errors.username = 'Username is required.';
        if(account.password.trim() === '')
            errors.password = 'Password is required.';

        return Object.keys(errors).length === 0 ? null : errors;
    }

    validateProperty = ({ name, value }) => {
        if(name === 'username' && value.trim() === '') return 'Username is required.';
        if(name === 'password' && value.trim() === '') return 'Password is required.';
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if(errors) return;

        //make call
        console.log('submitted');
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account, errors });
    }

    render() { 
        const { account, errors } = this.state;

        return (  
            <div>
                <h1>Login</h1>                    
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        onChange={this.handleChange}
                        label="Username"
                        name="username"
                        value={account.username}
                        error={errors.username}
                    />
                    <Input 
                        onChange={this.handleChange}
                        label="Password"
                        name="password"
                        value={account.password}
                        error={errors.password}
                    />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>    
            </div>
        );
    }
}
 
export default Login;