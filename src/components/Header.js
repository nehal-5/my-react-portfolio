import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#home" className="nav__logo">
            <img 
              src="/assets/images/nflogo.png" 
              alt="Logo" 
              style={{borderRadius: '180px'}} 
              width="80px" 
            />
          </a>
        </div>
        
        <div 
          className={`nav__menu ${isMenuOpen ? 'show' : ''}`} 
          id="nav-menu"
        >
          <ul className="nav__list">
            {[
              {href: '#home', text: 'Home'},
              {href: '#about', text: 'About'},
              {href: '#skills', text: 'Skills'},
              {href: '#work', text: 'Projects'},
              {href: '#contact', text: 'Contact'}
            ].map((item, index) => (
              <li key={index} className="nav__item">
                <a 
                  href={item.href} 
                  className="nav__link"
                  onClick={closeMenu}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div 
          className="nav__toggle" 
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <i className='bx bx-menu-alt-right'></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;