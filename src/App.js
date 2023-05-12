import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/session/LoginForm';
import RegistrationForm from './components/session/RegistrationForm';
import TablesDetails from './components/TableDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/TablesDetails/:tableId"
          element={<TablesDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
