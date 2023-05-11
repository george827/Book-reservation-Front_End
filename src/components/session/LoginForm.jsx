import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      fetch("http://localhost:3001/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      })
        .then((response) => {
          if (!response.ok) throw new Error(response.status);
          return response.json();
        })
        .then((data) => {
          localStorage.setItem(
            "user",
            JSON.stringify({ name: data.name, id: data.user_id })
          );
          window.location.pathname = "/homepage";
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">
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
        <button type="submit">Login</button>
      </div>
      <div className="form-group">
        <p>Don&apos;t have an account?</p>
        <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default LoginForm;
