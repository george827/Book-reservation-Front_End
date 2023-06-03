import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchRestaurantTablesData } from '../redux/tables/restaurantTablesSlice';

const RestaurantTables = () => {
  const dispatch = useDispatch();
  const shouldFetchData = useRef(true);
  useEffect(() => {
    if (shouldFetchData.current) {
      shouldFetchData.current = false;
      dispatch(fetchRestaurantTablesData());
    }
  }, [dispatch]);

  const { loading, tablesData } = useSelector(
    (state) => state.restaurantTables,
  );

  const [index, setIndex] = useState(0);
  const [singleTable, setSingleTable] = useState(tablesData ? index : null);

  const [threeTables, setThreeTables] = useState(
    tablesData ? tablesData.slice(index, index + 3) : [],
  );

  const checkNumber = (number) => {
    if (number > tablesData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return tablesData.length - 1;
    }
    return number;
  };

  useEffect(() => {
    if (tablesData && tablesData.length > 0) {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setSingleTable(checkNumber(index));
        setThreeTables([]);
      } else if (tablesData.length === 1) {
        setSingleTable(checkNumber(index));
        setThreeTables([tablesData[checkNumber(index)]]);
      } else {
        setThreeTables([
          tablesData[checkNumber(index - 1)],
          tablesData[checkNumber(index)],
          tablesData[checkNumber(index + 1)],
        ]);
      }
    }
    // eslint-disable-next-line
  }, [index, tablesData]);

  const handlePrevClick = () => {
    setIndex((index) => checkNumber(index - 1));
  };

  const handleNextClick = () => {
    setIndex((index) => checkNumber(index + 1));
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="tables-section">
      <h2>Reserve a Table</h2>
      <button className="prev-btn" type="button" onClick={handlePrevClick}>
        <FaCaretLeft />
      </button>
      <div className="tables">
        {window.innerWidth < 768 && tablesData.length > 0 && (
          <article className="single-table">
            <img
              src={tablesData[singleTable].image}
              alt={tablesData[singleTable].name}
            />
            <div className="table-info">
              <div className="title-price">
                <h4>{tablesData[singleTable].name}</h4>
                <h4 className="price">
                  $
                  {tablesData[singleTable].price}
                </h4>
              </div>
              <p>
                {`${tablesData[singleTable].desc.substring(0, 100)}...`}
                <Link to={`/TableDetails/${tablesData[singleTable].id}`}>
                  See More
                </Link>
              </p>
            </div>
          </article>
        )}
        {tablesData.length > 0
          && threeTables.map((table) => (
            <article key={table.name} className="single-table">
              <img src={table.image} alt={table.name} />
              <div className="table-info">
                <div className="title-price">
                  <h4>{table.name}</h4>
                  <h4 className="price">
                    $
                    {table.price}
                  </h4>
                </div>
                <p>
                  {`${table.desc.substring(0, 100)}...`}
                  <Link to={`/TableDetails/${table.id}`}>See More</Link>
                </p>
              </div>
            </article>
          ))}
      </div>

      <button className="next-btn" type="button" onClick={handleNextClick}>
        <FaCaretRight />
      </button>
    </section>
  );
};

export default RestaurantTables;
