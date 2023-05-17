import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ReservedTable from '../components/ReservedTable';

const mockStore = configureMockStore([]);

const initialState = {
  restaurantTables: {
    tablesData: [
      {
        id: 1,
        image: 'https://example.com/image1.jpg',
        name: 'Table1',
        table_size: 20,
        price: 100.0,
        desc: 'This is table 1',
      },
      {
        id: 2,
        image: 'https://example.com/image2.jpg',
        name: 'Table 2',
        table_size: 10,
        price: 200.0,
        desc: 'This is table 2',
      },
    ],
  },
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('ReservedTable', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
      },
      writable: true,
    });

    useParams.mockReturnValue({
      tableId: '1',
      city: 'New York',
      startDate: '2023-05-15',
      endDate: '2023-05-20',
    });
  });

  test('renders correctly', () => {
    window.localStorage.getItem.mockReturnValue(
      JSON.stringify({ id: 1, name: 'John' }),
    );
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <ReservedTable />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Your Name:')).toBeInTheDocument();
    expect(screen.getByText('Your Name:').nextSibling.textContent).toBe('John');

    expect(screen.getByText('Table Name:')).toBeInTheDocument();
    expect(screen.getByText('Table Name:').nextSibling.textContent).toBe(
      'Table1',
    );

    expect(screen.getByText('City:')).toBeInTheDocument();
    expect(screen.getByText('City:').nextSibling.textContent).toBe('New York');

    expect(screen.getByText('Start Date:')).toBeInTheDocument();
    expect(screen.getByText('Start Date:').nextSibling.textContent).toBe(
      '2023-05-15',
    );

    expect(screen.getByText('End Date:')).toBeInTheDocument();
    expect(screen.getByText('End Date:').nextSibling.textContent).toBe(
      '2023-05-20',
    );
  });
});
