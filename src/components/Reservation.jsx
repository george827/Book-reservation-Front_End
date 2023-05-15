import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReservation } from '../redux/reservations/reservationsSlice';

const Reservation = ({ reservation }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(cancelReservation(id));
    window.location.href = '/homepage';
  };

  return (
    <div className="reservation card ms-3">
      <p>
        City:
        {reservation.city}
      </p>
      <p>
        startDate:
        {reservation.start_date}
      </p>
      <p>
        EndDate:
        {reservation.end_date}
      </p>
      <p>
        Table Name:
        {reservation.table_name}
      </p>
      <div className="">
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(reservation.id)}>Cancel reservation</button>
      </div>
    </div>
  );
};

Reservation.propTypes = {
  reservation: PropTypes.shape({
    city: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    table_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    restaurant_tables: PropTypes.shape({
      image: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Reservation;
