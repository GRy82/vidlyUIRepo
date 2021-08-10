//import logo from './logo.svg';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movies from './components/movies';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NotFound from './components/NotFound';
import NavBar from './components/navbar';
import MovieForm from './components/movieForm';
import Login from './components/login';
import './App.css';
import Register from './components/register';
import http from './services/httpService';


class App extends Component{
  render(){
    return (
      
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
