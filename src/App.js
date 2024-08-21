import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // Keep Header
import Nav from './Nav';
import Main from './Main';
import About from './About'; // If you plan to have a separate about page
import BookingPage from './BookingPage'; // Placeholder component for booking
import Footer from './Footer'; // Keep Footer
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Main />} /> {/* Placeholder */}
        <Route path="/contact" element={<Main />} /> {/* Placeholder */}
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
