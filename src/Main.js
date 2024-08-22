import { useReducer } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import BookingForm from './BookingForm';

// Function to initialize times (called once during reducer initialization)
function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; // Set default available times
}

// Reducer function to update times based on the selected date
function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    // For now, keep returning the same available times
    // You could extend this to update based on action.date
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
  return state;
}

function Main() {
  // useReducer hook instead of useState
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;
