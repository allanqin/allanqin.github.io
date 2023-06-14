import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";
import "./Experience.css";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

const Experience = () => {
  return (
    <Element name={"Projects"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Projects</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container>
          {/* <ContactForm /> */}
          <div>
            <div className="project">Panorama Education</div>
            <div className="summary">
              Panorama Student Success provides an integrated tool to display
              student data, research-based strategies, and effective
              intervention. The dashboard features multiple levels ranging from
              school district summaries to individualized student reports
              containing data on Attendance, Academics, Behavior, etc. It
              provides teachers and administrators with tools to more
              efficiently access resources and deliver education.
            </div>
            <div className="responsibilities">Responsibilities</div>
            <ul>
              <li>
                Proficiently utilized modern web technologies and best practices
                to develop high-quality code
              </li>
              <li>
                Successfully updated legacy codebase by proficiently
                transitioning to functional React components using React Hooks
                and updating stateful logic, lifecycle methods, props, and event
                listeners
              </li>
              <li>
                Demonstrated a strong commitment to the DRY principle while
                developing software, resulting in reduced code redundancy and
                improved maintainability of the codebase
              </li>
              <li>
                Effectively utilized React Router to implement a single-page
                application architecture, enabling seamless navigation
                throughout the website and improving user experience
              </li>
              <li>
                Implemented Redux Toolkit to efficiently manage global state,
                providing a streamlined and organized approach to state
                management throughout the application
              </li>
              <li>
                Contributed to an Agile/Scrum team by fostering efficient
                communication and optimized processes, resulting in successful
                project delivery throughout the development lifecycle
              </li>
              <li>
                Developed and implemented advanced filtering components,
                enabling convenient and user-friendly sorting and retrieval of
                data for improved user experience
              </li>
              <li>
                Ensured high coverage and proper documentation of codebase with
                React Testing Library and Jest
              </li>
            </ul>
          </div>

          <div>
            <div className="project">Vagaro</div>
            <div className="summary">
              Vagaro aims to help small businesses in the beauty, wellness, and
              fitness industries by providing services and technologies. The
              Vagaro marketplace provides, on the customer side, features for
              customers to find, review, and interact with small businesses, and
              on the business side, provides professional solutions such as
              Calendar, Booking, Customer Tracking, Marketing, etc.
            </div>
            <div className="responsibilities">Responsibilities</div>
            <ul>
              <li>
                Collaborated within an Agile/Scrum team, ensuring efficient
                communication and streamlined processes throughout the
                development lifecycle
              </li>
              <li>
                Developed high-quality code by skillfully implementing modern
                web technologies and adhering to industry best practices
              </li>
              <li>
                Contributed to the migration from React class components to
                React functional components, by working closely with the
                development team to ensure a seamless and efficient transition
              </li>
              <li>
                Contributed multiple reusable React components to the internal
                shared UI library, enabling more efficient and consistent
                development across projects
              </li>
              <li>
                Utilized Storybook to develop and showcase reusable components,
                resulting in improved collaboration between designers and
                developers and increased development efficiency
              </li>
              <li>
                Employed Jest and Storybook to perform comprehensive tests on
                individual components in isolation to ensure proper
                functionality and user experience
              </li>
              <li>
                Utilized server-side authentication using JWT for secure and
                efficient user authentication
              </li>
            </ul>
          </div>

          <div className='margin-bottom'>
            <div className="project">TicketDM</div>
            <div className="summary">
              This start-up offers a C2C e-commerce ticket exchange platform for
              music festival goers to connect, exchange, and resale tickets.
              Their site features a dashboard that shows relevant upcoming and
              past events, a heatmap for where festivals and exchanges are most
              populated, and a market system to facilitate transactions.
            </div>
            <div className="responsibilities">Responsibilities</div>
            <ul>
              <li>
                Developed a spatial heatmap of our user-base with Mapbox’s GL JS
                JavaScript library to create a vector map interface of event and
                user transaction densities at geographical coordinates to better
                indicate hotspots of festivals and peer-to-peer ticket exchanges
              </li>
              <li>
                Collaborated in a team environment, following the Agile
                methodology and using through GIT version control to leverage
                the ability to merge multiple developmental branches together
                and to revert back to previous stable states
              </li>
              <li>
                Utilized the phpMyAdmin web tool to develop a MySQL relational
                database management system and meet ACID compliance in an
                e-commerce business
              </li>
              <li>
                Queried and modified data from the MySQL database with the
                jQuery JavaScript library
              </li>
              <li>
                Developed and maintained RESTful API’s using Node.js and
                Express.js and used Postman to validate API endpoints
              </li>
            </ul>
          </div>
        </Container>
      </StyledSection>
    </Element>
  );
};

export default Experience;
