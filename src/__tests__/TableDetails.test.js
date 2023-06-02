import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TableDetails from '../components/TableDetails';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const mockStore = configureMockStore([]);

const initialState = {
  restaurantTables: {
    tablesData: [
      {
        id: 1,
        image: 'https://example.com/image1.jpg',
        table_size: 20,
        price: 100.0,
        desc: 'This is table 1',
      },
      {
        id: 2,
        image: 'https://example.com/image2.jpg',
        table_size: 10,
        price: 200.0,
        desc: 'This is table 2',
      },
    ],
  },
};

describe('TableDetails', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ tableId: '1' });
  });

  test('renders correctly', () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
          <TableDetails />
        </Router>
      </Provider>,
    );
  });
});
