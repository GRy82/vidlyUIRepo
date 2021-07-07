import React, { Component } from 'react';
import Input from './common/input';


class Login extends Component {
    state = {
        account: { username: "", password: "" },
        errors: {}
    };

    validate = () => {
        return { username: "Username is required." };
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = validate();
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