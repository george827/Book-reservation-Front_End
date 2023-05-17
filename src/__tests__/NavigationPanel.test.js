import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationPanel from '../components/NavigationPanel';

describe('NavigationPanel', () => {
  test('renders correctly', () => {
    render(
      <Router>
        <NavigationPanel />
      </Router>,
    );
    const logoElements = screen.getAllByText('Logo');
    const hamburgerButton = screen.getByRole('button', {
      selector: '.hamburger',
    });
    const sidenavLinks = screen.getAllByRole('link', { hidden: true });

    expect(logoElements.length).toBeGreaterThan(0);
    expect(hamburgerButton).toBeInTheDocument();
    expect(sidenavLinks).toHaveLength(4);
  });

  test('toggles links visibility when hamburger button is clicked', async () => {
    render(
      <Router>
        <NavigationPanel />
      </Router>,
    );

    const hamburgerButton = screen.getByRole('button', {
      selector: '.hamburger',
    });

    fireEvent.click(hamburgerButton);

    await waitFor(() => {
      const linksContainer = screen.queryByTestId('links-container');
      expect(linksContainer).toBeVisible();
    });
  });
});
