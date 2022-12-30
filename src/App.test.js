import { render, screen } from '@testing-library/react';
// import App from './App';
import Cards from './components/Cards';

test('renders learn react link', () => {
  render(<Cards />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
