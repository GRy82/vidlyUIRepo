import React, { Component } from 'react';
import Input from './common/input';


class Login extends Component {
    state = {
        account: { username: "", password: "" },
        errors: {}
    };

    validate = () => {
        const account = this.state.account;
        const errors = {};

        if(account.username.trim() === '')
            errors.username = 'Username is required.';
        if(account.password.trim() === '')
            errors.password = 'Password is required.';

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState(errors);
        if(errors) return;

        //make call
        console.log('submitted');
    }

    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    }

    render() { 
        const { account } = this.state;

        return (  
            <div>
                <h1>Login</h1>                    
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        onChange={this.handleChange}
                        label="Username"
                        name="username"
                        value={account.username}
                    />
                    <Input 
                        onChange={this.handleChange}
                        label="Password"
                        name="password"
                        value={account.password}
                    />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>    
            </div>
        );
    }
}
 
export default Login;