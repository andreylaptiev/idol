import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

test('input renders', () => {
  render(<Input />);
});

test('type "abc" in input', async () => {
  const user = userEvent.setup();
  render(<Input />);
  const input = screen.getByRole('textbox');
  await user.type(input, 'abc');
  expect(input).toHaveValue('abc');
});
