import { useDispatch, useSelector } from 'react-redux';
import { deleteRestaurantTable } from '../redux/tables/restaurantTablesSlice';
import NavigationPanel from './NavigationPanel';

const DeleteTable = () => {
  const { tablesData } = useSelector((state) => state.restaurantTables);
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
      <div className="container delete-container">
        {tablesData.length === 0 && (
          <div className="d-flex justify-content-center">
            <p className="text-center">You have no tables</p>
          </div>
        )}
        <div>
          <h1 className="text-center">Delete a Table</h1>
        </div>
        {tablesData.map((table) => (
          <div className="my-reservation mt-3 justify-content-between mb-3" key={table.id}>
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
