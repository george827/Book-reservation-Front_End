import React, { useState, useEffect } from 'react';
import Reservation from './Reservation';
import NavigationPanel from './NavigationPanel';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch(
        'https://book-a-table.onrender.com/api/v1/reservations',
      );
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
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="naviagtion-panel">
        <NavigationPanel />
      </div>
      <div
        className="container d-flex flex-column my-reserve
    align-items-center justify-content-center"
      >
        <div>
          <h1>My Reservations</h1>
          <p>{message}</p>
        </div>
        <div className="reservations mb-2">
          {reservations.map((reservation) => (
            <Reservation key={reservation.id} reservation={reservation} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyReservations;
