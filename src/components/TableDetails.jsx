import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TableDetails = () => {
  const { tableId } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const { tablesData } = useSelector((state) => state.restaurantTables);
  const table = tablesData.find((table) => table.id === parseInt(tableId, 10));
  const {
    table_size: TableSize, price, name, desc: description, image, id,
  } = table;

  const handleDelete = (id) => {
    console.log('Deleting table with ID:', id);
    fetch(`http://127.0.0.1:3001/api/v1/restaurant_tables/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          const error = new Error(response.status);
          setShowAlert(true);
          throw error;
        } else {
          return response.json();
        }
      })
      .then(() => {
        window.location.pathname = '/homepage';
      })
      .catch((error) => {
        console.error('Error deleting table:', error);
        throw new Error(error);
      });
  };

  return (
    <>
      <div className="container details-container">
        {showAlert && (
        <div className="alert alert-danger" role="alert">
          failed to delete table
        </div>
        )}
        <div className="row">
          <div className="col-md-6">
            <img src={image} alt={name} className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-end mb-auto">
            <p className="details-title">
              <strong>
                {name}
              </strong>

            </p>
            <ul className="detail-list">
              <li>
                Table size:
                {' '}
                <span>
                  {' '}
                  {TableSize}
                </span>
              </li>
              <li>
                Price:
                {' '}
                <span>
                  {' '}
                  {price}
                </span>
              </li>
              <li>
                Table id:
                {' '}
                <span>
                  {' '}
                  {id}
                </span>
              </li>
            </ul>

            <p>{description}</p>
            <Link
              to={{
                pathname: `/single-table/${table.id}/reservation-form/${table.id}`,
              }}
              className="reserve"
            >
              <button type="button" className="session-btn reserve">Reserve</button>
            </Link>

            <button type="button" className="btn btn-danger" onClick={() => handleDelete(table.id)}>Delete</button>
          </div>
        </div>
        <Link to="/homepage" className="back-link mt-4">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default TableDetails;
