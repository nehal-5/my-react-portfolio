import React, { useEffect } from 'react';
import Typed from 'typed.js';

function Home() {
  useEffect(() => {
    const options = {
      strings: [
        "Web Developer", 
        "UI/UX Designer", 
        "Tech Enthusiast", 
        "Cloud Enthusiast", 
        "Content Writer", 
        "CP explorer"
      ],
      typeSpeed: 70,
      backSpeed: 150,
      loop: true
    };

    const typed = new Typed(".auto-type", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi, <br />
          I am <span className="home__title-color">Nehal</span><br />
          <span className="auto-type"></span>
        </h1>
        <a href="#contact" className="button">Contact</a>
      </div>

      <div className="home__img">
        <img 
          src="/assets/images/homeimg.png" 
          alt="myimg" 
          width="300" 
          height="200" 
        />
      </div>
    </section>
  );
}

export default Home;