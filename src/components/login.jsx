import React, { Component } from 'react';

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
    }

    render() { 
        return (  
            <div>
                <h1>Login</h1>                    
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>    
            </div>
        );
    }
}
 
export default Login;