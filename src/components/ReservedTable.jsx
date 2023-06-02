import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import NavigationPanel from './NavigationPanel';

const ReservedTable = () => {
  const {
    tableId, city, startDate, endDate,
  } = useParams();

  const { tablesData } = useSelector((state) => state.restaurantTables);
  const table = tablesData.find((table) => table.id === parseInt(tableId, 10));
  const user = JSON.parse(localStorage.getItem('user'));
  const userName = user.name;

  return (
    <>
      <div className="naviagtion-panel">
        <NavigationPanel />
      </div>
      <section className="reserved-table-section">
        <h3>Successfully reserved a table!</h3>
        <article>
          <p>
            <span className="span-title">Your Name: </span>
            <span className="reserved-span">
              {userName.charAt(0).toUpperCase() + userName.slice(1)}
            </span>
          </p>
          <p>
            <span className="span-title">Table Name: </span>
            <span className="reserved-span">{table.name}</span>
          </p>
          <p>
            <span className="span-title">City: </span>
            <span className="reserved-span">{city}</span>
          </p>
          <p>
            <span className="span-title">Start Date: </span>
            <span className="reserved-span">{startDate}</span>
          </p>
          <p>
            <span className="span-title">End Date: </span>
            <span className="reserved-span">{endDate}</span>
          </p>
        </article>
        <FaCheckCircle className="check" />
      </section>
    </>
  );
};

export default ReservedTable;
