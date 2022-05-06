import '@testing-library/jest-dom';
import {cleanup, render, screen} from '@testing-library/react';
import Button from './Button';

afterEach(() => cleanup);

test('button is rendered and enabled', () => {
  render(<Button />);
  const button = screen.getByRole('button');
  expect(button).toBeEnabled();
});

test('button text content is "My Button"', () => {
  render(<Button>My Button</Button>);
  const button = screen.getByRole('button');
  // match the whole content with RegExp
  expect(button).toHaveTextContent(/^My Button$/);
});
