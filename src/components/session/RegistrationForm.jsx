import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name) {
      fetch('http://localhost:3001/api/v1/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
        .then((response) => {
          if (response.ok) {
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
    <form onSubmit={handleSubmit} className="container mt-5 card p-5 my-card">
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
        <button type="submit" className="session-btn">Register</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
