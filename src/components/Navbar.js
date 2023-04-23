// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link className="navbar-link" to="/">
          Home
        </Link>
      </div>
      <div className="navbar-right">
        <Link className="navbar-link" to="/profile">
          Profile
        </Link>
        <Link className="navbar-link" to="/notifications">
          Notifications
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
