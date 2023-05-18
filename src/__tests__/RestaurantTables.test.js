import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RestaurantTables from '../components/RestaurantTables';

// eslint-disable-next-line react/display-name
jest.mock('../components/NavigationPanel', () => () => <div>Mocked NavigationPanel</div>);

describe('RestaurantTables', () => {
  test('renders loading...', () => {
    render(
      <Provider store={store}>
        <Router>
          <RestaurantTables />
        </Router>
      </Provider>,
    );

    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders tables data', async () => {
    render(
      <Provider store={store}>
        <Router>
          <RestaurantTables />
        </Router>
      </Provider>,
    );
  });
});
