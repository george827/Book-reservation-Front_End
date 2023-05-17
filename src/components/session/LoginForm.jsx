import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (name) {
      fetch('http://localhost:3001/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
        .then((response) => {
          if (!response.ok) {
            const error = new Error(response.status);
            setShowAlert(true);
            setLoading(false);
            throw error;
          } else {
            setLoading(false);
            return response.json();
          }
        })
        .then((data) => {
          localStorage.setItem(
            'user',
            JSON.stringify({ id: data.user_id, name: data.user_name }),
          );
          window.location.pathname = '/homepage';
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
        {showAlert && (
          <div className="alert alert-danger" role="alert">
            Invalid name
          </div>
        )}
        <div className="form-group">
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

        <div className="form-group mt-4">
          <button type="submit" className="session-btn">
            Login
          </button>
        </div>
        <div className="form-group mt-2">
          <p>Don&apos;t have an account?</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
