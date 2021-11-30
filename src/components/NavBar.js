import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => (
  <div className="header">
    <h1 className="nav-title">Math Magicians</h1>
    <ul className="nav-list">
      <li>
        <Link to="/" className="active-link">
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link to="/calc" className="active-link">
          <p>Calculator</p>
        </Link>
      </li>
      <li>
        <Link to="/quote" className="active-link">
          <p>Quote</p>
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
