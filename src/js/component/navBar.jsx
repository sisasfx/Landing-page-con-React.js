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
        <div class="dropdown">
          <button
            class="btn btn-dark dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faBars}/>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">
                Home
            </button>
            <button class="dropdown-item" type="button">
              About
            </button>
            <button class="dropdown-item" type="button">
              Services
            </button>
            <button class="dropdown-item" type="button">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
