import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
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
            throw error;
          } else {
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
      <form onSubmit={handleSubmit} className="container mt-5 card p-5 my-card">
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
  );
};

export default LoginForm;
