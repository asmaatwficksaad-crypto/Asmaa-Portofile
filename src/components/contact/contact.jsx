import React, { useState } from 'react';
import './contact.css';
import { FaCheckCircle } from "react-icons/fa";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className='contine' id="contact">
      <div className="top">
        <h3>Say Hello</h3>
        <h1>Get In Touch</h1>
        <hr />
        <p>Open to freelance projects, internships, and full-time opportunities. Let's build something great together.</p>
      </div>

      <div className="contacts">
        <div className="details">
          <h1>👩‍💻</h1>
          <h2><i>Eng/</i>ASmaa Saad</h2>
          <p>Full-Stack Developer based in Egypt. I love building elegant, responsive web applications and am always open to new opportunities.</p>
          
          <div className="loca">
            <h2>📍</h2>
            <div className="detil">
              <h3>Location</h3>
              <h2>Damietta, Egypt</h2>
            </div>
          </div>

          <div className="loca">
            <h2>✉️</h2>
            <div className="detil">
              <h3>Email</h3>
              <h2>asmaatwficksaad@gmail.com</h2>
            </div>
          </div>

          <div className="loca">
            <h2>💻</h2>
            <div className="detil">
              <h3>Focus</h3>
              <h2>Front-End Development</h2>
            </div>
          </div>
        </div>

        <div className="message">
          <h2>Send a Message</h2>
          
          {!isSubmitted ? (
            <form onSubmit={handleSend} className="info">
              <input type="text" placeholder='First Name' required />
              <input type="text" placeholder='Last Name' required />
              <input type="email" placeholder='Email Address' required />
              <input type="tel" placeholder='Phone NO .(Optional)' />
              <textarea placeholder='Your Message....' className='lg' required></textarea>
              <button type="submit">Send Message</button>
            </form>
          ) : (
            <div className="success-container">
              <div className="success-icon-box">
                <FaCheckCircle className="check-icon" />
              </div>
              <h3>Message sent successfully!</h3>
              <p>I'll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;