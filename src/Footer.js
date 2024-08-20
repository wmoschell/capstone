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
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>1234 Main St<br/>Chicago, IL 60601</p>
          <p>(123) 456-7890</p>
        </div>
        <div className="footer-social">
  <a href="#"><div className="social-box"></div></a>
  <a href="#"><div className="social-box"></div></a>
  <a href="#"><div className="social-box"></div></a>
</div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
