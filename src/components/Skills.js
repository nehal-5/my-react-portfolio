import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      icon: 'bxl-html5',
      name: 'HTML,CSS,JS',
      percentage: 90
    },
    {
      icon: 'bxl-react',
      name: 'React',
      percentage: 75
    },
    {
      icon: 'bxl-python',
      name: 'Python',
      percentage: 70
    },
    {
      icon: 'bxl-c-plus-plus',
      name: 'C++',
      percentage: 80
    },
    {
      icon: 'bx-code-curly',
      name: 'DSA',
      percentage: 50
    },
    {
      icon: 'bx-code-block',
      name: 'Problem-Solving',
      percentage: 60
    },
    {
      icon: 'bxl-figma',
      name: 'UI/UX',
      percentage: 90
    }
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">Turning code into creative solutions, one problem at a time.</p>
          
          {skillsData.map((skill, index) => (
            <div key={index} className="skills__data">
              <div className="skills__names">
                <i className={`bx ${skill.icon}`}></i>
                <span className="skills__name">{skill.name}</span>
              </div>
              <div>
                <span className="skills__percentage">{skill.percentage}%</span>
              </div>
              <div 
                className={`skills__bar skills__${skill.name.toLowerCase().split(',')[0]}`}
              ></div>
            </div>
          ))}
        </div>
        
        <div>
          <img 
            src="./assets/images/skillsimg.png" 
            alt="" 
            className="skilss__img" 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;