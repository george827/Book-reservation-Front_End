import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TableDetails = () => {
  const { tableId } = useParams();
  const { tablesData } = useSelector((state) => state.restaurantTables);
  const table = tablesData.find((table) => table.id === parseInt(tableId, 10));
  const {
    table_size: TableSize, price, name, desc: description, image, id,
  } = table;

  return (
    <>
      <div className="container details-container">
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
