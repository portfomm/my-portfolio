import React, {useState} from 'react';
import './Experiences.scss';
import projectimg1 from "../../assets/Images/experience1.png"
import projectimg2 from "../../assets/Images/experience2.png"
import projectimg3 from "../../assets/Images/experience3.png"
import CommonModal from '../../custom/Modal/Modal';

const Experiences = () => {
  const [details, setDetails] = useState()

  const experiencesArray = [
    {
      id: 1,
      img: projectimg1,
      post: 'Software Engineer',
      company: 'Avonet Technologies PVT LTD',
      companyLocation: 'Kent Town SA 5067, Australia',
      duration: 'Since 2023',
      moreDetails: {
        project: 'Train Ticket Booking System',
        clients: 'World Compass, Odamigo',
        description: 'Started to work with RailEurope and sell our product to their customers aswell. And grow more the product.',
        technologies: 'NextJs, NestJs, TypeScripts, AWS Resources',
        myResponsibilities: [
          'Successfully integrated the PAYTEN payment method as a configurable feature for the Odamigo client, ensuring seamless and efficient payment processing.',
          'Took ownership of releasing QA, staging, and live versions of projects, incorporating DevOps practices to streamline deployment workflows.',
          'Managed and configured domains using AWS Route 53 to ensure reliability and scalability.',
          'Designed and planned the invoice flow for credit booking processes, collaborating closely with team members and providing technical guidance to other developers.',
          'Spearheaded the design and planning of a ferry booking process integrated into the International Rail platform, supervising other developers to ensure successful implementation.',
          'Planned and designed for invoice flow for credit bookings. And handled other developers for that.',
          'Implemented OKTA sign-in (external identity provider) with AWS Cognito for seamless user authentication in the International Rail project.',
          'Planned and analyzed client requirements, creating detailed estimation documents to facilitate project planning and execution.'
        ]
      }
    },
    {
      id: 2,
      img: projectimg2,
      post: 'Associate Software Engineer',
      company: 'Avonet Technologies PVT LTD',
      companyLocation: 'Kent Town SA 5067, Australia',
      duration: 'Apr 2022 - Dec 2022',
      moreDetails: {
        project: 'Train Ticket Booking System',
        clients: 'International Rail, Ohshu Express, WebBeds',
        description: 'The International Rail project was converted into a customizable product as name ”AVNLINK”.',
        technologies: 'NextJs, NestJs, TypeScripts, AWS Resources',
        myResponsibilities: [
          'Implemented the GMO payment gateway into the Ohshu project as a configurable option alongside the existing Stripe gateway, ensuring flexibility and adaptability in payment processing.',
          'Began leveraging AWS Amplify to enhance project development and deployment workflows.',
          'Planned, designed, and supervised the implementation of Japanese translations for the website, guiding other developers to ensure accurate localization.',
          'Designed and implemented an offline booking process for administrators on the International Rail platform, coordinating with and mentoring other developers during the development phase.',
          'Developed and implemented the credit booking flow for WebBeds and Ohshu projects, providing technical leadership to other team members throughout the process.',
          'Configured and added MFA functionality using AWS Cognito for secure logins in the WebBeds project.'
        ]
      }
    },
    {
      id: 3,
      img: projectimg3,
      post: 'Software Engineer Intern',
      company: 'Avonet Technologies PVT LTD',
      companyLocation: 'Kent Town SA 5067, Australia',
      duration: 'Oct 2021 - Apr 2022',
      moreDetails: {
        project: 'Train Ticket Booking System',
        clients: 'International Rail, Ohshu Express, WebBeds',
        description: 'The International Rail project was converted into a customizable product as name ”AVNLINK”.',
        technologies: 'NextJs, NestJs, TypeScripts, AWS Resources',
        myResponsibilities: [
          'Built user interfaces based on Figma design specifications, ensuring a high standard of quality and user experience.',
          'Designed and implemented backend functionalities to support core application requirements.',
          'Successfully completed end-to-end integrations between frontend, backend, and third-party services to ensure seamless functionality.',
          'Identified and resolved software bugs, improving overall system stability and performance.'
        ]
      }
    }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="experiences" className="d-flex me-5">
        <h2 className="project_heading">My Experiences</h2>
        <div className="w-100 d-flex flex-column align-item-center justify-center">
          {experiencesArray.map((experience, index) => (
            <div className={`w-100 d-flex ${'project-item'.concat(index % 2 === 0 ? '-left' : '-right')}`}  style={{
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
            }}>
            <div
              key={experience.id}
              className="project_wrapper"
            >
              <div className="project_cover">
                <img src={experience.img} alt={experience.post} />

              </div>
              <div className="project_header" style={{top: index % 3 === 0 ? '0px' : index % 3 === 1 ? '50px' : '50px', left: index % 3 === 0 ? 'unset' : index % 3 === 1 ? '-50px' : 'unset', right: index % 3 === 1 ? '' : '-50px'}}>
                  <h3>{experience.post}</h3>
                  <span>{experience.company}</span>
              </div>
              <button className="contact_button" onClick={() => {
                setIsModalOpen(true)
                setDetails(experience.moreDetails)
                }}>View More</button>
            </div>
            </div>
          ))}
        </div>
         {details && <CommonModal   open={isModalOpen}
        onCloseModal={(isOpen) => setIsModalOpen(isOpen)} >
          <h1>{details?.project ?? ''}</h1>
          <h4>Clients: {details?.clients ?? ''}</h4>
          <p>{details?.description ?? ''}</p>
          <p>{details?.technologies ?? ''}</p>
          <ul>
            {details?.myResponsibilities?.map((item)=> (
              <li>{item}</li>
            ))}
          </ul>
        </CommonModal>}
      </section>
  )
};

export default Experiences;
