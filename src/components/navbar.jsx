import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (  
            
                <div className="navbar-nav">
                    <NavLink
                        to='/movies'
                        className="nav-item nav-link" 
                        >Movies
                    </NavLink>
                    <NavLink
                        to='/customers'
                        className="nav-item nav-link" 
                        >Customers
                    </NavLink>
                    <NavLink
                        to='/rentals'
                        className="nav-item nav-link" 
                        >Rentals
                    </NavLink>
                </div>
         
    );
}
 
export default NavBar;