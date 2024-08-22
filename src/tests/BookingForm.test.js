// src/tests/BookingForm.test.js

import { render, screen } from '@testing-library/react';
import BookingForm from '../BookingForm';
import { MemoryRouter } from 'react-router-dom';

test('renders static text in the BookingForm', () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );

  // Use the exact text or adjust to match the button text exactly
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
});
