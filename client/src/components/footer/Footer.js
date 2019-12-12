import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <b>Flash Cards</b> - Thomas Foydel 2019{' '}
      <a href='https://thomasfoydel.com' className='portfoliolink'>
        <b>return to my portfolio</b>
      </a>
    </div>
  );
};

export default Footer;
