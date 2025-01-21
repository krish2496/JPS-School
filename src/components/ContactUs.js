import React from "react";
import "./ContactUs.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <button className="projects-button">
          <FaThLarge className="button-icon" />
          Contact Us
        </button>
        <h1>
          Get in Touch <span className="highlight">With Us</span>
        </h1>
        <p>Your inquiries matter to us. Please share them via the form, and we'll respond promptly.</p>
      </div>
      <div className="contact-us-content">
        <div className="contact-info">
          <h2>Contact Details</h2>
          <div className="address">
            <h3>Registered Office Address:</h3>
            <p>School</p>
            <p>Plot-No, Ward,</p>
            <p>Near  Temple, PUR,</p>
            <p>Kutch, Gujarat 370205, India</p>
            <p>
              <strong>GST Number:</strong> 24AEFPT9227D1ZG
            </p>
          </div>
          <div className="sales-contact">
            <h3>Sales Contact</h3>
            <p>
              <FaPhoneAlt style={{ color: "#012A4A", marginRight: "10px" }} />
              +91 99999 80455
            </p>
            <p>
              <FaEnvelope style={{ color: "#012A4A", marginRight: "10px" }} />
              Jpsschool2012@gmail.com
            </p>
            <button className="whatsapp-button">
              <FaWhatsapp style={{ marginRight: "10px" }} />
              WhatsApp
            </button>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
