import '@testing-library/jest-dom';
import {cleanup, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

afterEach(() => cleanup);

test('input renders', () => {
  render(<Input />);
  const input = screen.getByRole('textbox');
  expect(input).toBeVisible();
});

test('type "abc" in input', async () => {
  const user = userEvent.setup();
  render(<Input />);
  const input = screen.getByRole('textbox');
  await user.type(input, 'abc');
  expect(input).toHaveValue('abc');
});
