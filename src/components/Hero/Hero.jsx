import React from 'react';
import './Hero.scss';
import itsMe from "../../assets/Images/myimg3.png"
import LinkedInIcon from '../../assets/icons/linkedin';
import GitHub from '../../assets/icons/github';
import GmailIcon from '../../assets/icons/gmail';

const Hero = () => {
  const handleDownload = () => {
    const pdfPath = "https://drive.google.com/file/d/1lkVH_Y6AACjvn1E3jYFQ63UHFga1exGb/view?usp=sharing";

    window.open(pdfPath, "_blank");
  }

  return (
    <section id="hero" className="hero-section">
      <div className='about_me'>
        <div className='name_wrapper'>
          <span className='occ'>SOFTWARE ENGINEER</span>
          <h1>MILAN MALSHIKA</h1>
          <div className='download-cv'>
            <button className='download-btn' onClick={handleDownload}>CV</button>
          </div>
        </div>
        <div className='desc'>
          <p className='about-me-dec'>I'm a passionate full-stack software engineer from Sri Lanka with expertise in JavaScript technologies across the stack, including Node.js, Express, React, and NestJS, alongside AWS. While I enjoy working on both frontend and backend, my true focus is backend development and DevOps. I thrive on building scalable, efficient systems and am flexible to work either remotely or onsite.</p>
        </div>
        <div className='desc dec-text-right'>
          <p>milanmalshika22@gmail.com</p>
          <p>+9475-542-8226</p>
        </div>
      </div>
      <div className='its-me'>
        <img src={itsMe} alt='milan malishka' />
      </div>
      <div className='social-media'>
        <ul>
          <li><a href='https://www.linkedin.com/in/milan-malshika-12a9861a1/' target="_blank"><LinkedInIcon size={40} color={"#000000"}/></a></li>
          <li><a href='https://github.com/milanmalshika' target="_blank">
            <GitHub size={40} color={"#000000"}/>
            </a></li>
          <li><a href='mailto:milanmalshika22@gmail.com'>
            <GmailIcon size={30}  color={"#000000"} />
            </a></li>

        </ul>
      </div>
    </section>
  );
};

export default Hero;
