import React from "react";
import "./Footer.scss";
import GmailIcon from "../../assets/icons/gmail";
import LinkedInIcon from "../../assets/icons/linkedin";
import GitHub from "../../assets/icons/github";

const Footer = () => {
  return (
    <footer>
      <div class="footer-section footer-section-left">
        <h3>About Me</h3>
        <p>
        I am a Software Engineer with over 3 years of experience, passionate about learning new technologies and embracing challenges. A dedicated team player and quick learner, I aim to contribute to organizations by leveraging my skills and experience to achieve common goals, deliver exceptional results, and advance my career while making a positive impact on society.
        </p>
      </div>

      <div class="footer-section">
        <h3>Contact</h3>
        <p>Email: milanmalshika22@gmail.com</p>
        <p>Phone: +9475-542-8226</p>
      </div>

      <div class="footer-section social-icons">
        <h3>Follow Me</h3>
        <div>
        <a href="#" target="_blank" aria-label="GitHub">
          <GmailIcon size={20}/>
        </a>
        <a href="#" target="_blank" aria-label="Twitter">
        <LinkedInIcon size={22}/>
        </a>
        <a href="#" target="_blank" aria-label="Email">
        <GitHub size={24}/>
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
