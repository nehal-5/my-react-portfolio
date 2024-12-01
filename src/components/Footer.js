import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Nehal Fathema</p>

      <div className="footer__social">
        <a href="#" className="footer__icon">
          <i className='bx bxl-twitter'></i>
        </a>
        <a href="#" className="footer__icon">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href="#" className="footer__icon">
          <i className='bx bxl-github'></i>
        </a>
        <a href="mailto:nehalfathema5611@gmail.com" className="footer__icon">
          <i className='bx bxl-gmail'></i>
        </a>
        <a href="./Nehal Fathema Resume1.pdf" className="footer__icon">
          <i className='bx bxs-user-badge'></i>
        </a>
      </div>
      <p>&#169; 2024 copyright all rights reserved</p>
    </footer>
  );
};

export default Footer;