import React from "react";
import './Contact.css'; // Import the new CSS file

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1 className="form-title">Get in Touch</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="6"></textarea> {/* Adjust the rows for the textarea */}
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
