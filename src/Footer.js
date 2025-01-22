import React from 'react';
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="icons-container">
       {/* <FaInstagram className="icon" />*/ }
       <a href="https://www.instagram.com/thejpsschool/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaInstagram className="icon" />
        </a>
       {/*<FaFacebookF className="icon" />*/}
       <a href="https://www.facebook.com/profile.php?id=100066474881001&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaFacebookF className="icon" />
        </a> 
       { /*<FaYoutube className="icon" />*/}
       <a href="http://www.youtube.com/@jpsschool7513" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaYoutube className="icon" />
        </a>
      </div>
      <div className="school-name">JPS School</div>
      <div className="links-container">
        <a href="#" className="link">Privacy Policy</a>
        <span className="separator">|</span>
        <a href="#" className="link">Website Accessibility</a>
        <span className="separator">|</span>
        <a href="#" className="link">Manage Cookies</a>
      </div>
    </footer>
  );
};

export default Footer;
