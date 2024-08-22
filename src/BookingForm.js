import { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './api'; // Importing the functions

function BookingForm() {
  const [date, setDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  useEffect(() => {
    if (date) {
      const times = fetchAPI(new Date(date));
      setAvailableTimes(times);
    }
  }, [date]); // Fetch available times whenever the date changes

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion
    };
    if (submitAPI(formData)) {
      alert(`Reservation confirmed for ${guests} guests on ${date} at ${time} for ${occasion}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
