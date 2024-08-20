import logo from './Logo.svg';
import Nav from './Nav'; // Import the Nav component

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <Nav /> {/* Add the Nav component inside the header */}
    </header>
  );
}

export default Header;
