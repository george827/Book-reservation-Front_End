import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.pathname = '/';
  };

  return (
    <button type="button" onClick={handleLogout} className="logout-btn">
      Log Out
    </button>
  );
};

export default LogoutButton;
