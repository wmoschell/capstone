import React from 'react';
import BookingForm from './BookingForm';
import { submitAPI } from './api'; // Import the submitAPI function

function BookingPage() {
  // Define the submitForm function
  const submitForm = (formData) => {
    return submitAPI(formData); // This will return true if the API call is successful
  };

  return (
    <div className="page-container">
      <h1>Book Your Table</h1>
      <p>Reserve a table at Little Lemon by filling out the form below.</p>
      <BookingForm submitForm={submitForm} /> {/* Pass submitForm as a prop */}
    </div>
  );
}

export default BookingPage;
