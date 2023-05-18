import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaCaretLeft } from 'react-icons/fa';
import { deleteRestaurantTable } from '../redux/tables/restaurantTablesSlice';
import NavigationPanel from './NavigationPanel';

const TableDetails = () => {
  const { tableId } = useParams();
  const { tablesData } = useSelector((state) => state.restaurantTables);
  const table = tablesData.find((table) => table.id === parseInt(tableId, 10));
  const {
    table_size: TableSize, price, name, desc: description, image, id,
  } = table;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRestaurantTable(id));
    window.location.href = '/homepage';
  };

  return (
    <>
      <div className="naviagtion-panel">
        <NavigationPanel />
      </div>
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
            <div className="d-flex justify-content-between">
              <Link
                to={{
                  pathname: `/single-table/${table.id}/reservation-form/${table.id}`,
                }}
                className="reserve"
              >
                <button type="button" className="session-btn reserve">Reserve</button>
              </Link>

              <button type="button" className="btn-delete-table" onClick={() => handleDelete(table.id)}>Delete</button>
            </div>
          </div>
        </div>
        <Link to="/homepage" className="back-link mt-4">
          <FaCaretLeft />
        </Link>
      </div>
    </>
  );
};

export default TableDetails;
