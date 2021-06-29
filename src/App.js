//import logo from './logo.svg';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Movies from './components/movies';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NotFound from './components/NotFound';
import NavBar from './components/navbar';

function App() {
  return (
    <main className='container'>
      <NavBar />
      <Switch>
        <Route path='/movies' component={Movies} />
        <Route path='/customers' component={Customers} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/not-found' component={NotFound} />
        <Redirect to='/movies' from='/' />
        <Redirect to='/not-found' />
      </Switch>
    </main>
  );
}

export default App;
