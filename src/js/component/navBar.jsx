import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className="row">
      <nav
        className="navbar bg-dark d-flex justify-content-between"
        id="unActive"
      >
        <h4 className="navbar-brand text-light d-flex align-items-center">
          Start Bootstrap
        </h4>
        <ul className="navbar-nav flex-row">
          <li className="nav-item text-light">Home</li>
          <li className="nav-item text-light">About</li>
          <li className="nav-item text-light">Services</li>
          <li className="nav-item text-light">Contact</li>
        </ul>
      </nav>

      <nav
        className="navbar bg-dark d-flex justify-content-between"
        id="active"
      >
        <h4 className="navbar-brand text-light d-flex align-items-center">
          Start Bootstrap
        </h4>
        <button className="nav-item dropdown bg-dark">
            <span className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button">
                <FontAwesomeIcon icon={faBars}/>
            </span>
            <ul className="dropdown-menu">
                <li className="dropdown-item">Home</li>    
                <li className="dropdown-item">About</li>
                <li className="dropdown-item">Services</li>
                <li className="dropdown-item">Contact</li>
            </ul>            
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
