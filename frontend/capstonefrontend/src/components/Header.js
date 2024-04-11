// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo1.png'; // replace with your logo file path
import './Header.css'; // add a CSS file for styling

function Header() {
    return (
        <header>
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>
        </header>
    );
}

export default Header;