import React from 'react';

const Explorations = () => {
  const explorationEvents = [
    {
      image: './assets/images/devfest.jpeg',
      alt: 'devfest',
      description: '"I proudly participated in Google Dev Fest, enriching my skills."'
    },
    {
      image: './assets/images/sushacks.jpeg',
      alt: 'sushacks',
      description: '"I joined Sus Hacks Hackathon, exploring and creating innovative solutions."',
      style: { borderRadius: '180px' }
    },
    {
      image: './assets/images/gdscwow.jpeg',
      alt: 'gdsc wow',
      description: '"I connected and networked with peers and professionals at GDSC WOW."',
      style: { borderRadius: '180px' }
    }
  ];

  return (
    <section className="work section" id="explorations">
      <h2 className="section-title">Explorations</h2>
      <p className="exp__text">
        "Exploration is curiosity put into action"- <em>Don Walsh</em>
      </p>
      <div className="work__container bd-grid">
        {explorationEvents.map((event, index) => (
          <div key={index} className="work__img">
            <img 
              src={event.image} 
              alt={event.alt} 
              style={event.style} 
            />
            <p className="exp__text" style={{ margin: '5px' }}>
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explorations;