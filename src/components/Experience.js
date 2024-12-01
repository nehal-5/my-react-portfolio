import React from 'react';

const Experience = () => {
  const experiences = [
    {
      image: './assets/images/algozenith3.jpg',
      alt: 'algozenith',
      text: 'Proud to be selected as the AlgoZenith Student Chapter Lead, fostering a community of coding enthusiasts and future innovators.'
    },
    {
      image: './assets/images/gssocuiux2.jpg',
      alt: 'GirlScript Summer of Code',
      text: 'Worked as a UI/UX designer at GirlScript Summer of Code, creating user-friendly interfaces and enhancing user experiences.'
    },
    {
      image: './assets/images/acm1.jpg',
      alt: 'ACM Student Chapter',
      text: 'Part of the ACM Student Chapter as a technical content writer, crafting clear, informative, and engaging technical documentation.'
    }
  ];

  return (
    <section className="work section" id="expwork">
      <h2 className="section-title">Experience</h2>
      <p className="exp__text">
        "All genuine learning comes from experience"- <em>John Dewey</em>
      </p>
      <div className="work__container bd-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="work__img">
            <img src={exp.image} alt={exp.alt} />
            <div className="overlay">
              <div className="textimghover">{exp.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;