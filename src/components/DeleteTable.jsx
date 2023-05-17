import { useDispatch, useSelector } from 'react-redux';
import { FiArrowLeft } from 'react-icons/fi';
import { deleteRestaurantTable } from '../redux/tables/restaurantTablesSlice';

const DeleteTable = () => {
  const { tablesData } = useSelector((state) => state.restaurantTables);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRestaurantTable(id));
    window.location.href = '/homepage';
  };

  return (
    <>
      <div className="container">
        {tablesData.length === 0 && (
          <div className="d-flex justify-content-center">
            <p className="text-center">You have no tables</p>
          </div>
        )}
        <div>
          <h1 className="text-center">Delete a Table</h1>
          <div>
            <a href="/homepage" className="back-arrow">
              <FiArrowLeft />
            </a>
          </div>
        </div>
        {tablesData.map((table) => (
          <div className="my-reservation mt-3 justify-content-between" key={table.id}>
            <div className="reservation-imag">
              <img src={table.image} alt={table.name} className="my-reservation-img" />
            </div>
            <div className="ms-3 mt-3 reserve-list">
              <ul className="reserved-items">
                <li>
                  <strong>
                    Table Name:
                  </strong>
                  <span>
                    {table.name}
                  </span>
                </li>
                <li>
                  <strong>
                    Table size:
                  </strong>
                  <span>
                    {table.table_size}
                  </span>
                </li>
                <li>
                  <strong>
                    Price:

                  </strong>
                  <span>
                    {table.price}
                  </span>
                </li>

              </ul>

              <button type="button" className="btn btn-danger mt-3" onClick={() => handleDelete(table.id)}>Delete table</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DeleteTable;
