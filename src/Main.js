import { useReducer } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import BookingForm from './BookingForm';
import { submitAPI } from './api'; // Import the submitAPI function

// Function to initialize times (called once during reducer initialization)
export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; // Set default available times
}

// Reducer function to update times based on the selected date
export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  // Define the submitForm function
  const submitForm = (formData) => {
    return submitAPI(formData); // This will return true if the API call is successful
  };

  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} /> {/* Pass submitForm as a prop */}
    </main>
  );
}

export default Main;
