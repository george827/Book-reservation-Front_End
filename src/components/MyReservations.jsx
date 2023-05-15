import React, { useState, useEffect } from 'react';
import Reservation from './Reservation';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch('http://localhost:3001/api/v1/reservations');
      const data = await response.json();
      if (data) {
        const userReservations = data.filter(
          (reservation) => reservation.user_id === userId,
        );
        setReservations(userReservations);
        if (userReservations.length === 0) {
          setMessage('You have no reservations');
        }
      }
    };
    fetchReservations();
  }, []);

  return (
    <div>
      <h1>My Reservations</h1>
      <p>{message}</p>
      <div className="reservations">
        {reservations.map((reservation) => (
          <Reservation key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </div>
  );
};

export default MyReservations;
