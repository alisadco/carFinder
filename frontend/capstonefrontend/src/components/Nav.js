// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dealerships">Dealerships</Link>
                </li>
                <li>
                    <Link to="/add">Add</Link>
                </li>
                <li>
                    <Link to="/manage">Manage</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;