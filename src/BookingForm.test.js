import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';  // Adjust this path based on your structure

test('renders static text in the BookingForm', () => {
  render(<BookingForm />);
  
  const headingElement = screen.getByText("Make Your reservation");
  
  expect(headingElement).toBeInTheDocument();
});