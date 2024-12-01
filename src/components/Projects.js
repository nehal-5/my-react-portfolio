import React from 'react';

const Projects = () => {
  const projects = [
    {
      image: './assets/images/flipnmatchcover.jpg',
      alt: 'Flip\'n match mania cover',
      description: 'Memory Card Game using HTML,CSS,JAVASCRIPT',
      link: 'https://nehal-5.github.io/Flip-n-Match-Mania/'
    },
    {
      image: './assets/images/Weathercover.png',
      alt: 'Weather app cover',
      description: 'Weather Forecast App made using HTML,CSS,Javascript',
      link: 'https://nehal-5.github.io/weathercheck/'
    },
    {
      image: './assets/images/todoappcover.png',
      alt: 'todo app cover',
      description: 'A to-do list app for projects',
      link: 'https://nehal-5.github.io/weathercheck/'
    }
  ];

  return (
    <section className="work section" id="work">
      <h2 className="section-title">Projects</h2>
      <p className="exp__text">
        "Whatever good things we build end up building US"- <em>Jim Rohn</em>
      </p>
      <div className="work__container bd-grid">
        {projects.map((project, index) => (
          <div key={index} className="work__img">
            <img src={project.image} alt={project.alt} />
            <div className="overlay">
              <div className="textimghover">
                {project.description} <br />
                <a 
                  href={project.link} 
                  style={{ color: 'white' }} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  "Link to project"
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;