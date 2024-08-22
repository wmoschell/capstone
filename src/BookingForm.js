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
  const [isFormValid, setIsFormValid] = useState(false);

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
    setIsFormValid(Object.keys(errors).length === 0);
  };

  // Handle form field changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'res-date') setDate(value);
    if (id === 'res-time') setTime(value);
    if (id === 'guests') setGuests(Number(value));
    if (id === 'occasion') setOccasion(value);

    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    const isSubmitted = submitForm(formData);
    if (isSubmitted) {
      navigate('/booking-confirmed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleInputChange}
        required
      />
      {formErrors.date && <p className="error">{formErrors.date}</p>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleInputChange}
        required
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {formErrors.time && <p className="error">{formErrors.time}</p>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={handleInputChange}
        required
      />
      {formErrors.guests && <p className="error">{formErrors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleInputChange}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {formErrors.occasion && <p className="error">{formErrors.occasion}</p>}

      <button type="submit" className="hero-button" disabled={!isFormValid}>
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
