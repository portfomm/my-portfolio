import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="me-5">
      <div className="section_left">
        <div className="circle_img">
          <h2 className="header_about">About Me</h2>
        </div>
      </div>
      <div className="section_right">
        {" "}
        <p className="about-me-dec">
          I have more than 3 years of experience in Software Engineering field.
          I’m an enthusiastic and ambitious person who passionate of learning
          new technologies while taking up new challenges. As being a good team
          player and quick learner. I’m willing to serve for an organization
          allowing me to learn, develop my skills, utilize my knowledge and
          experience through working with a team to pursue common goals deliver
          the best results to the organization and society while advancing my
          career.
        </p>
      </div>
    </section>
  );
};

export default About;
