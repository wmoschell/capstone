import heroImage from './images/restauranfood.jpg'; // Adjust this path based on your folder structure
import special1 from './images/greeksalad.jpg'; // Adjust paths for your special images
import special2 from './images/bruchetta.svg'; 
import special3 from './images/lemondessert.jpg';
import avatar from './images/avatar.png';
import aboutImage from './images/restaurant.jpg';

function Main() {
  return (
    <main>
      {/* Hero Section */}
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

      {/* Specials Section */}
      <section className="specials">
        <div className="specials-header">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <div className="specials-grid">
          <div className="card">
            <img src={special1} alt="Special 1" />
            <div className="card-content">
              <h3>Text</h3>
              <p className="highlight-text">$0</p>
              <p>Body text.</p>
            </div>
          </div>
          <div className="card">
            <img src={special2} alt="Special 2" />
            <div className="card-content">
              <h3>Text</h3>
              <p className="highlight-text">$0</p>
              <p>Body text.</p>
            </div>
          </div>
          <div className="card">
            <img src={special3} alt="Special 3" />
            <div className="card-content">
              <h3>Text</h3>
              <p className="highlight-text">$0</p>
              <p>Body text.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
    <h2>Testimonials</h2>
    <div className="testimonial-grid">
      <div className="testimonial-card">
        <div className="rating">⭐⭐⭐⭐⭐</div>
        <h3 className="testimonial-title">Review title</h3>
        <p className="testimonial-body">Review body</p>
        <div className="reviewer-info">
         <img src={avatar} alt="Reviewer name" className="reviewer-image" />
          <div>
            <p className="reviewer-name">Reviewer name</p>
            <p className="review-date">Date</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <div className="rating">⭐⭐⭐⭐⭐</div>
        <h3 className="testimonial-title">Review title</h3>
        <p className="testimonial-body">Review body</p>
        <div className="reviewer-info">
        <img src={avatar} alt="Reviewer name" className="reviewer-image" />
          <div>
            <p className="reviewer-name">Reviewer name</p>
            <p className="review-date">Date</p>
          </div>
        </div>
      </div>
      <div className="testimonial-card">
        <div className="rating">⭐⭐⭐⭐⭐</div>
        <h3 className="testimonial-title">Review title</h3>
        <p className="testimonial-body">Review body</p>
        <div className="reviewer-info">
        <img src={avatar} alt="Reviewer name" className="reviewer-image" />
          <div>
            <p className="reviewer-name">Reviewer name</p>
            <p className="review-date">Date</p>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* About Section */}
  <section className="about">
  <div className="about-content">
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p>
      Lorium ipsom dolor cantous us andor flos un anto blasop a canto flai imusto camprous
    </p>
  </div>
  <div className="about-image">
  <img src={aboutImage} alt="Interior of Little Lemon Restaurant" />
  </div>
</section>
    </main>
  );
}

export default Main;
