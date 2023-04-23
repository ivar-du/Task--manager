// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Oversikt over nyansatte ved Sunnaas Sykehus</h1>
      <div className="home-grid">
        <Link className="home-item" to="/tasks">
          Gjøremål
        </Link>
        <Link className="home-item" to="/employee-list">
          Ansattliste
        </Link>
        <Link className="home-item" to="/add-task">
          Generell Oppgaveliste
        </Link>
      </div>
    </div>
  );
};

export default Home;
