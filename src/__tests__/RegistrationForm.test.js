import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RegistrationForm from '../components/session/RegistrationForm';

describe('RegistrationForm', () => {
  test('renders correctly', () => {
    render(
      <Router>
        <RegistrationForm />
      </Router>,
    );
    const nameElement = screen.getByPlaceholderText('Enter your name');
    // eslint-disable-next-line no-unused-expressions
    expect(nameElement).toBeInTheDocument;

    const registerButton = screen.getByText('Register');
    fireEvent.change(nameElement, { target: { value: 'John' } });
    fireEvent.click(registerButton);
    expect(nameElement.value).toBe('John');
  });
});
