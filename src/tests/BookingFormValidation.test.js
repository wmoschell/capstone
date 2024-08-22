// src/tests/BookingFormValidation.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import BookingForm from '../BookingForm';

const mockSubmitForm = jest.fn();

describe('BookingForm validation', () => {
  test('Form does not submit when fields are invalid', () => {
    render(
      <MemoryRouter> {/* Wrap with MemoryRouter */}
        <BookingForm submitForm={mockSubmitForm} />
      </MemoryRouter>
    );

    const submitButton = screen.getByText(/make your reservation/i);
    
    // Trigger a form submission without filling required fields
    fireEvent.click(submitButton);

    // Expect that the form was not submitted
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test('Form submits successfully with valid input', () => {
    render(
      <MemoryRouter> {/* Wrap with MemoryRouter */}
        <BookingForm submitForm={mockSubmitForm} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByText(/make your reservation/i);

    // Fill in valid data
    fireEvent.change(dateInput, { target: { value: '2023-08-25' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // Trigger form submission
    fireEvent.click(submitButton);

    // Expect the form to be submitted
    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  });
});
