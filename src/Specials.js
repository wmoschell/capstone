import special1 from './images/greeksalad.jpg';
import special2 from './images/bruchetta.svg';
import special3 from './images/lemondessert.jpg';

function Specials() {
  return (
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
  );
}

export default Specials;
