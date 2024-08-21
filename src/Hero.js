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
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Delicious food at Little Lemon" />
      </div>
    </section>
  );
}

export default Hero;
