import { useState, useEffect } from 'react';
import { fetchAPI } from './api';
import { useNavigate } from 'react-router-dom';

function BookingForm({ submitForm }) {
  const [date, setDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form has been submitted

  const navigate = useNavigate();

  useEffect(() => {
    if (date) {
      const times = fetchAPI(new Date(date));
      setAvailableTimes(times);
    }
  }, [date]);

  // Client-side validation function
  const validateForm = () => {
    const errors = {};
    if (!date) {
      errors.date = 'Date is required.';
    }
    if (!time) {
      errors.time = 'Time is required.';
    }
    if (guests < 1 || guests > 10) {
      errors.guests = 'Number of guests must be between 1 and 10.';
    }
    if (!occasion) {
      errors.occasion = 'Occasion is required.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle form field changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'res-date') setDate(value);
    if (id === 'res-time') setTime(value);
    if (id === 'guests') setGuests(Number(value));
    if (id === 'occasion') setOccasion(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Mark the form as submitted

    if (!validateForm()) return;

    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    const isSubmittedSuccessfully = submitForm(formData);
    if (isSubmittedSuccessfully) {
      navigate('/booking-confirmed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} aria-label="Reservation form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleInputChange}
        required
        aria-required="true"
        aria-invalid={!!formErrors.date && isSubmitted}
      />
      {formErrors.date && isSubmitted && <p className="error" aria-live="assertive">{formErrors.date}</p>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleInputChange}
        required
        aria-required="true"
        aria-invalid={!!formErrors.time && isSubmitted}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {formErrors.time && isSubmitted && <p className="error" aria-live="assertive">{formErrors.time}</p>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={handleInputChange}
        required
        aria-required="true"
        aria-invalid={!!formErrors.guests && isSubmitted}
      />
      {formErrors.guests && isSubmitted && <p className="error" aria-live="assertive">{formErrors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleInputChange}
        required
        aria-required="true"
        aria-invalid={!!formErrors.occasion && isSubmitted}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {formErrors.occasion && isSubmitted && <p className="error" aria-live="assertive">{formErrors.occasion}</p>}

      <button type="submit" className="hero-button" disabled={Object.keys(formErrors).length !== 0} aria-disabled={Object.keys(formErrors).length !== 0}>
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
