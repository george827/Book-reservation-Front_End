import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ReservationForm from '../components/ReservationForm';

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
    // Mock the localStorage getItem method
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
      },
      writable: true,
    });
  });
  test('renders correctly', () => {
    // Mock the localStorage getItem method to return a user object
    window.localStorage.getItem.mockReturnValue(
      JSON.stringify({ id: 1, name: 'John' }),
    );
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
          <ReservationForm />
        </Router>
      </Provider>,
    );
  });
});
