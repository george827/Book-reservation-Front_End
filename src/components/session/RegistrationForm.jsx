import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (name) {
      fetch('https://book-a-table.onrender.com/api/v1/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
        .then((response) => {
          if (response.ok) {
            setLoading(false);
            window.location.pathname = '/';
          } else {
            throw new Error(response.status);
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  };
  return (
    <div className="container session-container">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border spin-color" role="status">
            <span className="sr-only" />
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="mt-5 card p-5 my-card">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="form-group-session">
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group-session mt-4">
          <button type="submit" className="session-btn">Register</button>
        </div>
        <div className="form-group-session mt-2 my-link">
          <p>Have an account?</p>
          <Link to="/">Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
