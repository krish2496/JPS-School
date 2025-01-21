import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <ul className="navbar-links">
          <li>Alumni</li>
          <li>Careers</li>
          <li>NIRF</li>
          <li>IQAC</li>
          <li>Placement</li>
          <li>Scholarship</li>
          <li>Student Corner</li>
          <li>Contact Us</li>
          <li>Online Programmes</li>
        </ul>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-logo">
          <img src="images/jps.jpeg" alt="Charusat Logo" />
          <span>JPS School</span>
          
        </div>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>About Us</li>
          <li>Programmes</li>
          <li className="highlight">Research</li>
          <li>Campus Life</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
