import special1 from './images/greeksalad.jpg';
import special2 from './images/bruchetta.svg';
import special3 from './images/lemondessert.jpg';

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        {/* Adding aria-label for the button */}
        <button aria-label="View the online menu">Online Menu</button>
      </div>
      <div className="specials-grid">
        <div className="card">
          <img src={special1} alt="Greek Salad" />
          <div className="card-content">
            <h3>Greek Salad</h3>
            <p className="highlight-text">$12</p>
            <p>A fresh salad with tomatoes, cucumbers, and feta cheese.</p>
          </div>
        </div>
        <div className="card">
          <img src={special2} alt="Bruschetta" />
          <div className="card-content">
            <h3>Bruschetta</h3>
            <p className="highlight-text">$8</p>
            <p>Crispy bread topped with tomatoes, garlic, and basil.</p>
          </div>
        </div>
        <div className="card">
          <img src={special3} alt="Lemon Dessert" />
          <div className="card-content">
            <h3>Lemon Dessert</h3>
            <p className="highlight-text">$7</p>
            <p>A sweet and tangy lemon-flavored dessert.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
