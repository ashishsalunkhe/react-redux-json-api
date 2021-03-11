import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/admission">Admission</NavLink>
            </li>
            </ul>
       </div>
       </nav>
    );
}
 
export default Header;