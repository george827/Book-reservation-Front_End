import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelReservation } from '../redux/reservations/reservationsSlice';

const Reservation = ({ reservation }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(cancelReservation(id));
    window.location.reload();
  };

  return (
    <>
      <div className="my-reservation mt-3 justify-content-between">
        <div className="reservation-image">
          <img src={reservation.restaurant_table.image} alt={reservation.table_name} className="my-reservation-img" />
        </div>
        <div className="ms-3 mt-3 reserve-list">
          <ul className="reserved-items">
            <li>

              <strong>City:</strong>
              <span>{reservation.city}</span>

            </li>

            <li>

              <strong>Start Date:</strong>
              <span>{reservation.start_date}</span>

            </li>

            <li>

              <strong> End Date:</strong>
              <span>{reservation.end_date}</span>

            </li>

            <li>

              <strong>Table Name:</strong>
              <span>{reservation.table_name}</span>

            </li>
            <li>

              <strong>Table size:</strong>
              <span>{reservation.restaurant_table.table_size}</span>

            </li>

          </ul>

          <div className="">
            <button type="button" className="btn btn-danger mt-3" onClick={() => handleDelete(reservation.id)}>Cancel reservation</button>
          </div>
        </div>
      </div>
    </>
  );
};

Reservation.propTypes = {
  reservation: PropTypes.shape({
    city: PropTypes.string.isRequired,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    table_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    restaurant_table: PropTypes.shape({
      image: PropTypes.string.isRequired,
      table_size: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Reservation;
