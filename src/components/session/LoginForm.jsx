import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (name) {
      fetch('https://book-a-table.onrender.com/api/v1/login', {
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
          navigate('/homepage');
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

        <div className="mt-4 btn-session">
          <button type="submit" className="session-btn">
            Login
          </button>
        </div>
        <div className="form-group-session mt-2">
          <p>Don&apos;t have an account?</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
