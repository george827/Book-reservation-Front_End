import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub,
} from 'react-icons/fa';
import LogoutButton from './session/LogoutButton';

const NavigationPanel = () => {
  const [showLinks, setShowLinks] = useState(false);

  const activeStyle = {
    backgroundColor: '#9acd32',
    color: '#fff',
  };

  return (
    <section className="nav-section">
      <nav>
        <div className="header">
          <p className="ms-1">SleekDine</p>
          <button
            type="button"
            data-testid="hamburger-button"
            className={`hamburger ${showLinks ? 'active' : ''}`}
            onClick={() => setShowLinks(!showLinks)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        {showLinks && (
          <div className="nav-links" data-testid="links-container">
            <Link
              to="/homepage"
              activeClassName="active-link"
              onClick={() => setShowLinks(false)}
            >
              Tables
            </Link>
            <Link to="/AddTable">Add Table</Link>
            <Link to="/DeleteTable" activeClassName="active-link">
              Delete Table
            </Link>
            <Link to="/reservation-form" activeClassName="active-link">
              Make Reservation
            </Link>
            <Link to="/Myresercvations" activeClassName="active-link">
              My Reservations
            </Link>
            <LogoutButton />
          </div>
        )}
      </nav>
      <div className="sidenav">
        <h4>SleekDine</h4>
        <div className="sidenav-links">
          <NavLink
            to="/homepage"
            className="sidenav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Tables
          </NavLink>
          <NavLink
            to="/AddTable"
            className="sidenav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Add Table
          </NavLink>
          <NavLink
            to="/DeleteTable"
            className="sidenav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Delete Table
          </NavLink>
          <NavLink
            to="/reservation-form"
            className="sidenav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Make Reservation
          </NavLink>
          <NavLink
            to="/Myresercvations"
            className="sidenav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Reservations
          </NavLink>
          <LogoutButton className="sidenav-link" />
        </div>
        <ul className="social-links">
          <li className="social-link">
            <FaTwitter />
          </li>
          <li className="social-link">
            <FaFacebookF />
          </li>
          <li className="social-link">
            <FaLinkedinIn />
          </li>
          <li className="social-link">
            <FaGithub />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavigationPanel;
