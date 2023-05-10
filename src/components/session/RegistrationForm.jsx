import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name) {
      fetch("http://localhost:3000/api/v1/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
        .then((response) => {
          if (response.ok) {
            window.location.pathname = "/";
          } else {
            alert('failed to create user');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('Failed to create user. Please try again');
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>

      <div className="form-group">
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
