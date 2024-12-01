import React from 'react';

const Profiles = () => {
  const codingProfiles = [
    {
      name: 'Codechef',
      image: './assets/images/c.png',
      link: 'https://www.codechef.com/users/nehalfathema_5'
    },
    {
      name: 'Leetcode',
      image: './assets/images/o.png',
      link: 'https://leetcode.com/u/Nehal_5/'
    },
    {
      name: 'Hackerrank',
      image: './assets/images/d.png',
      link: 'https://www.hackerrank.com/profile/nehalfathema05'
    },
    {
      name: 'Github',
      image: './assets/images/e.png',
      link: 'https://github.com/nehal-5'
    }
  ];

  return (
    <section className="work section" id="profiles">
      <h2 className="section-title">Profiles</h2>
      <p className="exp__text">
        "Programming isn't about what you know its about, what you can figure out"- <em>Chris Pine</em>
      </p>
      <div className="prof__cont bd-grid">
        {codingProfiles.map((profile, index) => (
          <div key={index}>
            <a href={profile.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={profile.image} 
                alt={profile.name} 
                width="300" 
                height="200" 
              />
            </a>
            <p style={{ textAlign: 'center' }}>{profile.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profiles;