import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/session/LoginForm';
import RegistrationForm from './components/session/RegistrationForm';
import TablesDetails from './components/TableDetails';
import NavigationPanel from './components/NavigationPanel';
import ReservationForm from './components/ReservationForm';
import ReservedTable from './components/ReservedTable';

function App() {
  return (
    <main>
      <NavigationPanel />
      <Routes>
        <Route path="/homepage" element={<Home />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/TableDetails/:tableId" element={<TablesDetails />} />
        <Route path="/reservation-form" element={<ReservationForm />} />
        <Route
          path="/single-table/:tableId/reservation-form/:tableId"
          element={<ReservationForm />}
        />
        <Route
          path="/reserved-table/:tableId/:city/:startDate/:endDate"
          element={<ReservedTable />}
        />
        <Route path="/addTable" element={<AddTable />} />
      </Routes>
    </main>
  );
}

export default App;
