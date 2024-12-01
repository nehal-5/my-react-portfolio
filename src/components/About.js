import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="./assets/images/about.png" alt="About" />
        </div>
        <div>
          <h2 className="about__subtitle">I am Nehal Fathema</h2>
          <p className="about__text">
            Passionate about coding and development. I thrive on turning ideas into 
            reality through innovative solutions. My journey is driven by curiosity, 
            creativity, and a commitment to excellence. Let's build something amazing 
            together, where technology meets imagination and every project tells a story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;