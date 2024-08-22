import heroImage from './images/restauranfood.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorium ipsum dolor cantous us andor flos un anto blasop a canto flai imusto camprous
        </p>
        {/* Adding aria-label for the button */}
        <button aria-label="Reserve a table at Little Lemon">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img 
          src={heroImage} 
          alt="Delicious food at Little Lemon" 
          aria-hidden="true" 
        />
      </div>
    </section>
  );
}

export default Hero;
