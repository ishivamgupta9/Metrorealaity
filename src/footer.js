import React from 'react';
import './footer.css';
import pic from './images/logo192.png';
function Footer() {
  return (
    <div className='footer-content'>
      <div className='footer-top'>
        <div className="bottom-logo">
          <img src={pic} alt="Realaityhomes Logo" className="b-logo" />
        </div>
        <div className='social-connect'>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <h4>Follow us on Instagram</h4>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <h4>Connect on LinkedIn</h4>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <h4>Watch us on YouTube</h4>
          </a>
        </div>
      </div>
      <div className='copy5'>
        &copy; 2023 Realaityhomes. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
