import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationPanel = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section className="nav-section">
      <nav>
        <div className="header">
          <p>Logo</p>
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
          <div className="nav-links">
            <Link to="/tables">Tables</Link>
            <Link to="/my-reservations">My Reservations</Link>
            <Link to="/login">Login</Link>
            <Link to="/homepage" onClick={() => setShowLinks(false)}>
              Home
            </Link>
          </div>
        )}
      </nav>
      <div className="sidenav">
        <h4>Logo Name</h4>
        <div className="sidenav-links" />
        <Link to="/tables" className="sidenav-link">
          Tables
        </Link>
        <Link to="/my-reservations" className="sidenav-link">
          My Reservations
        </Link>
        <Link to="/login" className="sidenav-link">
          Login
        </Link>
      </div>
    </section>
  );
};

export default NavigationPanel;
