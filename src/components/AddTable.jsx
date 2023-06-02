import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavigationPanel from './NavigationPanel';

const AddTable = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [tableSize, setTableSize] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const { tablesData } = useSelector((state) => state.restaurantTables);

  const handleSubmit = (event) => {
    const ids = tablesData.map((table) => table.id);
    const id = Math.max(...ids) + 1;
    event.preventDefault();
    if (image && name && tableSize && price && desc) {
      fetch('https://book-a-table.onrender.com/api/v1/restaurant_tables', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image, name, table_size: tableSize, price, desc, id,
        }),
      })
        .then((response) => {
          if (!response.ok) throw new Error(response.status);
          return response.json();
        })
        .then(() => {
          window.location.pathname = '/homepage';
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  };
  return (
    <>
      <div className="naviagtion-panel">
        <NavigationPanel />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Create a Table</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit} className="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="Image URL"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Table Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="tableSize"
                  placeholder="Enter table capacity"
                  value={tableSize}
                  onChange={(event) => setTableSize(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Enter price of the table"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  placeholder="Enter Table description"
                  value={desc}
                  onChange={(event) => setDesc(event.target.value)}
                />
              </div>

              <div className="btn-add-c">
                <button type="submit" className="session-btn btn-add-table">Add Table</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default AddTable;
