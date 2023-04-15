import React from 'react';
import './Css/Navbar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import nova from '../images/NovaPHC.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                
                <a className="navbar-brand" href="#">
                    <img className="navbar-logo" src={nova} alt="Nova" />
                    <a> </a>
                     Nova Public Health Consulting
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="team">Team</Link>
                        </li>
                       
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
