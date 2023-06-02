import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '../components/session/LoginForm';

describe('LoginForm', () => {
  test('renders correctly', () => {
    render(
      <Router>
        <LoginForm />
      </Router>,
    );
    const nameElement = screen.getByPlaceholderText('Enter your name');
    // eslint-disable-next-line no-unused-expressions
    expect(nameElement).toBeInTheDocument;

    const loginButton = screen.getByText('Login');
    fireEvent.change(screen.getByPlaceholderText('Enter your name'), {
      target: { value: 'John' },
    });
    fireEvent.click(loginButton);

    expect(localStorage.getItem('user')).toBeDefined();
    expect(nameElement.value).toBe('John');
  });
});
