import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/session/LoginForm';
import RegistrationForm from './components/session/RegistrationForm';
import TablesDetails from './components/TableDetails';
import NavigationPanel from './components/NavigationPanel';

function App() {
  return (
    <main>
      <NavigationPanel />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/TableDetails/:tableId"
          element={<TablesDetails />}
        />
      </Routes>
    </main>
  );
}

export default App;
