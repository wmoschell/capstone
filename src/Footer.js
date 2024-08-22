import logo from './Logo.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home" aria-label="Go to Home section">Home</a></li>
            <li><a href="#about" aria-label="Go to About section">About</a></li>
            <li><a href="#menu" aria-label="Go to Menu section">Menu</a></li>
            <li><a href="#reservations" aria-label="Go to Reservations section">Reservations</a></li>
            <li><a href="#order-online" aria-label="Go to Order Online section">Order Online</a></li>
            <li><a href="#login" aria-label="Go to Login section">Login</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>1234 Main St<br />Chicago, IL 60601</p>
          <p>(123) 456-7890</p>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Visit our Facebook page"><div className="social-box"></div></a>
          <a href="#" aria-label="Visit our Twitter page"><div className="social-box"></div></a>
          <a href="#" aria-label="Visit our Instagram page"><div className="social-box"></div></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
