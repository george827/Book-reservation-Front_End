import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Reservation from '../components/Reservation';

const mockStore = configureStore([]);

describe('Reservation component', () => {
  let store;
  let component;

  beforeEach(() => {
    const reservation = {
      id: 1,
      city: 'New York',
      start_date: '2023-06-01',
      end_date: '2023-06-03',
      table_name: 'Table 1',
      restaurant_table: {
        image: 'table1.jpg',
        table_size: 4,
      },
    };

    store = mockStore({
      reservations: {
        reservations: [reservation],
      },
    });

    component = render(
      <Provider store={store}>
        <Reservation reservation={reservation} />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component).toMatchSnapshot();
  });
});
