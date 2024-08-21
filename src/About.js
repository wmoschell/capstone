import aboutImage from './images/restaurant.jpg';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorium ipsum dolor cantous us andor flos un anto blasop a canto flai imusto camprous
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Interior of Little Lemon Restaurant" />
      </div>
    </section>
  );
}

export default About;
