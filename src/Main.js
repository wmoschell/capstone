import React, { useReducer, useState } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import BookingForm from './BookingForm';

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Here you can add logic based on the selected date
      return state;
    default:
      return state;
  }
};

function Main() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1); // Make sure this is initialized
  const [occasion, setOccasion] = useState('Birthday'); // Make sure this is initialized
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
  };

  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests} // Ensure this is passed as a prop
        occasion={occasion}
        setOccasion={setOccasion} // Ensure this is passed as a prop
        availableTimes={availableTimes}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default Main;
