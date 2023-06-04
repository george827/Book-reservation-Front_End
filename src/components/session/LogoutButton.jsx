import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <button type="button" onClick={handleLogout} className="logout-btn">
      Log Out
    </button>
  );
};

export default LogoutButton;
