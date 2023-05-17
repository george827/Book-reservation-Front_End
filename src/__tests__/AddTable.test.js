import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddTable from '../components/AddTable';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('AddTable component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      restaurantTables: {
        tablesData: [],
      },
    });
  });

  test('should render input fields', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <AddTable />
      </Provider>,
    );
    expect(getByPlaceholderText('Image URL')).toBeInTheDocument();
    expect(getByPlaceholderText('Table Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter table capacity')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter price of the table')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter Table description')).toBeInTheDocument();
  });

  test('should call handleSubmit when form is submitted', () => {
    const { getByText } = render(
      <Provider store={store}>
        <AddTable />
      </Provider>,
    );
    const submitBtn = getByText('Add Table');
    fireEvent.click(submitBtn);
    // expect any assertions after submit button is clicked
  });
});
