import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub,
} from 'react-icons/fa';
import LogoutButton from './session/LogoutButton';

const NavigationPanel = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section className="nav-section">
      <nav>
        <div className="header">
          <p className="ms-1">Logo</p>
          <button
            type="button"
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
            <Link to="/tables">Tables</Link>
            <Link to="/AddTable">Add Table</Link>
            <Link to="/DeleteTable">Delete Table</Link>
            <Link to="/reservation-form">Make Reservation</Link>
            <Link to="/Myresercvations">My Reservations</Link>
            <LogoutButton />
            <Link to="/homepage" onClick={() => setShowLinks(false)}>
              Home
            </Link>
          </div>
        )}
      </nav>
      <div className="sidenav">
        <h4>Logo</h4>
        <div className="sidenav-links">
          <Link to="/homepage" className="sidenav-link">
            Tables
          </Link>
          <Link to="/AddTable" className="sidenav-link">
            Add Table
          </Link>
          <Link to="/DeleteTable" className="sidenav-link">
            Delete Table
          </Link>
          <Link to="/reservation-form" className="sidenav-link">
            Make Reservation
          </Link>
          <Link to="/Myresercvations" className="sidenav-link">
            My Reservations
          </Link>
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
