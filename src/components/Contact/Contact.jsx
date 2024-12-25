import React from 'react';
import './Contact.scss';
import GmailIcon from '../../assets/icons/gmail';
import LinkedInIcon from '../../assets/icons/linkedin';
import GitHub from '../../assets/icons/github';

const Contact = () => {
  return (
    <section id="contact" className="me-5">
       <h2 className="heading">Contact Me</h2>
      <form className="contact-form">
        {/* <label htmlFor="name">Full Name *</label>
        <input type="text" placeholder='Enter Full Name' id="name" name="name" required />

        <label htmlFor="phone">Email Address *</label>
        <input type="tel" placeholder='Enter Email Address'  id="mail" name="mail" required />

        <label htmlFor="message">Message *</label>
        <textarea id="message" placeholder='message'   name="message" required></textarea>

        <button type="submit" className='submit-button'>Submit</button> */}
        <a
        href="mailto:milanmalshika22@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="custom-button  gmail_link"
      >
        <GmailIcon size={30}  color={"#000000"} />
        Email Me
      </a>

      <a
        href="https://www.linkedin.com/in/milan-malshika-12a9861a1/"
        target="_blank"
        rel="noopener noreferrer"
        className="custom-button linkedin_link"
      >
        <LinkedInIcon size={40} color={"#000000"}/>
        LinkedIn
      </a>
      <a
        href="https://github.com/milanmalshika/"
        target="_blank"
        rel="noopener noreferrer"
        className="custom-button  git_link"
      >
        <GitHub size={40} color={"#000000"}/>
        GitHub
      </a>
      </form>
    </section>
  );
};

export default Contact;
