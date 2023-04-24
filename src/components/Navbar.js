// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link className="navbar-link" to="/">
          Hjem
        </Link>
      </div>
      <div className="navbar-right">
        <Link className="navbar-link" to="/notifications">
          Varsler
        </Link>
        <Link className="navbar-link" to="/profile">
          Profil
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
