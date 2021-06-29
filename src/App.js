//import logo from './logo.svg';
import { Switch, Router, Redirect } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import NavBar from './components/navbar';

function App() {
  return (
    <main className='container'>
      <NavBar />
      <Switch>
        <Router path='/movies' component={Movies} />
        <Router path='/customers' component={Customers} />
        <Router path='/rentals' component={Rentals} />
        <Router path='/not-found' component={NotFound} />
        <Redirect to='/movies' from='/' />
        <Router path='/' />
        <Redirect to='/not-found' />
      </Switch>
    </main>
  );
}

export default App;
