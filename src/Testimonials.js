import avatar from './images/avatar.png';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <h3 className="testimonial-title">Review title 1</h3>
          <p className="testimonial-body">Review body 1</p>
          <div className="reviewer-info">
            <img src={avatar} alt="Reviewer 1" className="reviewer-image" />
            <div>
              <p className="reviewer-name">Reviewer name 1</p>
              <p className="review-date">Date 1</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <h3 className="testimonial-title">Review title 2</h3>
          <p className="testimonial-body">Review body 2</p>
          <div className="reviewer-info">
            <img src={avatar} alt="Reviewer 2" className="reviewer-image" />
            <div>
              <p className="reviewer-name">Reviewer name 2</p>
              <p className="review-date">Date 2</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <h3 className="testimonial-title">Review title 3</h3>
          <p className="testimonial-body">Review body 3</p>
          <div className="reviewer-info">
            <img src={avatar} alt="Reviewer 3" className="reviewer-image" />
            <div>
              <p className="reviewer-name">Reviewer name 3</p>
              <p className="review-date">Date 3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
