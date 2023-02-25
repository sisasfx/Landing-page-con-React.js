import React from "react";

const NavBar = () => {
    return(
        <nav className=".navbar-nav bg-dark d-flex justify-content-between">
            <h4 className="navbar-brand text-light d-flex align-items-center">Start Bootstrap</h4>
            <ul className="navbar-nav flex-row">
                <li className="nav-item text-light">Home</li>
                <li className="nav-item text-light">About</li>
                <li className="nav-item text-light">Services</li>
                <li className="nav-item text-light">Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;