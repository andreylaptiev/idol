import '@testing-library/jest-dom';
import {cleanup, render, screen} from '@testing-library/react';
import AuthForm from './AuthForm';
import Button from '../../common/Button/Button';

afterEach(() => cleanup);

test('render log in form', () => {
  const formSubmitButton = <Button>Log In</Button>;
  render(
    <AuthForm
      title ='Log In'
      formSubmitButton={formSubmitButton}
    />
  );
  const form = screen.getByRole('form');
  const title = screen.getByRole('heading');
  const emailInput = screen.getByRole('textbox', {name: /email/i});
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button');
  expect(form).toHaveFormValues({
    email: '',
    password: ''
  });
  expect(form).toHaveAttribute('name', 'loginForm');
  expect(title).toHaveTextContent(/^Log In$/);
  expect(emailInput).toBeVisible();
  expect(passwordInput).toBeVisible();
  expect(submitButton).toBeVisible();
  expect(submitButton).toBeEnabled();
});

test('render successfull log in message', () => {
  render(
    <AuthForm
      message ='Successful log in: user@mail.com'
    />
  );
  // match exact text content
  const message = screen.getByText(/^Successful log in: user@mail.com$/);
  expect(message).toBeVisible();
});
