import React from "react";
import { ProjectsSectionContainer, ProjectsHeading, ProjectsContainer, ProjectContainer, ProjectImg, ProjectTitle, ProjectDescription, ProjectLinks, ProjectLink, ProjectTopContainer, ProjectsAngleContainer, AngleRight, AngleLeft } from "./ProjectsElements";
import LinkedInClone from "../../images/LinkedInClone.png";
import Banking from "../../images/Banking.png";
import Pizza from "../../images/pizza.png";

function Projects() {
  return (
    <ProjectsSectionContainer id="projects">
      <ProjectsHeading>What I've Created</ProjectsHeading>
      <ProjectsContainer>

        <ProjectContainer>
          <ProjectTopContainer>
            <ProjectImg src={LinkedInClone} alt="project image" />
            <ProjectTitle>LinkedIn Clone</ProjectTitle>
            <ProjectDescription>
              Created a clone of the popular networking website. Built by using the React framework and Redux for state management. Authentication and deployment of the application was set up using Firebase.
            </ProjectDescription>
          </ProjectTopContainer>
          <ProjectLinks>
            <ProjectLink 
              href="https://linkedin-clone-5c1ec.web.app/" 
              target="_blank" 
              rel="norefferer"
            >Deployed Site</ProjectLink>
            <ProjectLink 
              href="https://github.com/robert-petersen/linkedin-clone" 
              target="_blank" 
              rel="norefferer"
            >GitHub Repo</ProjectLink>
          </ProjectLinks>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectTopContainer>
            <ProjectImg src={Banking} alt="project image" />
            <ProjectTitle>Banking Website</ProjectTitle>
            <ProjectDescription>
              Created a basic banking website using React, Styled Components, React Scroll, and React Icons. Application deployed using Vercel.
            </ProjectDescription>
          </ProjectTopContainer>
          <ProjectLinks>
            <ProjectLink 
              href="https://smooth-scroll-styled-components.vercel.app/" 
              target="_blank" 
              rel="norefferer"
            >Deployed Site</ProjectLink>
            <ProjectLink 
              href="https://github.com/robert-petersen/smooth-scroll-styled-components" 
              target="_blank" 
              rel="norefferer"
            >GitHub Repo</ProjectLink>
          </ProjectLinks>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectTopContainer>
            <ProjectImg src={Pizza} alt="project image" />
            <ProjectTitle>Pizza Website</ProjectTitle>
            <ProjectDescription>
              Created a basic pizza website using React, Redux for state management, Styled Components, React Scroll, and React Icons. Application deployed using Vercel.
            </ProjectDescription>
          </ProjectTopContainer>
          <ProjectLinks>
            <ProjectLink 
              href="https://pizza-website-one.vercel.app/" 
              target="_blank" 
              rel="norefferer"
            >Deployed Site</ProjectLink>
            <ProjectLink 
              href="https://github.com/robert-petersen/pizza-website" 
              target="_blank" 
              rel="norefferer"
            >GitHub Repo</ProjectLink>
          </ProjectLinks>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectTopContainer>
            <ProjectImg src={LinkedInClone} alt="project image" />
            <ProjectTitle>LinkedIn Clone</ProjectTitle>
            <ProjectDescription>
              Created a clone of the popular networking website. Built by using the React framework and Redux for state management. Authentication and deployment of the application was set up using Firebase.
            </ProjectDescription>
          </ProjectTopContainer>
          <ProjectLinks>
            <ProjectLink 
              href="https://linkedin-clone-5c1ec.web.app/" 
              target="_blank" 
              rel="norefferer"
            >Deployed Site</ProjectLink>
            <ProjectLink 
              href="https://github.com/robert-petersen/linkedin-clone" 
              target="_blank" 
              rel="norefferer"
            >GitHub Repo</ProjectLink>
          </ProjectLinks>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectTopContainer>
            <ProjectImg src="https://bdc2020.o0bc.com/wp-content/uploads/2018/04/CNR-Guys-Lede-scaled.jpg" alt="project image" />
            <ProjectTitle>Food Truck Backend</ProjectTitle>
            <ProjectDescription>
              Created a database for a food truck application using Node.js, Express, Knex, SQLite3, bcryptjs, JWT, and deployment on Heroku.
            </ProjectDescription>
          </ProjectTopContainer>
          <ProjectLinks>
            <ProjectLink 
              href="https://github.com/robert-petersen/food-truck-database" 
              target="_blank" 
              rel="norefferer"
            >GitHub Repo</ProjectLink>
          </ProjectLinks>
        </ProjectContainer>

        <ProjectContainer>
          <ProjectTopContainer>
            <ProjectImg src="https://page-builder.ted.com/system/baubles/files/000/005/178/original/schoolcloud.png" alt="project image" />
            <ProjectTitle>School in the Cloud Backend</ProjectTitle>
            <ProjectDescription>
              Created a database for a school task management application using Node.js, Express, Knex, SQLite3, bcryptjs, JWT, and deployment on Heroku.
            </ProjectDescription>
          </ProjectTopContainer>
          <ProjectLinks>
            <ProjectLink 
              href="https://github.com/School-In-The-Cloud-LambdaSchool/SchoolDB" 
              target="_blank" 
              rel="norefferer"
            >GitHub Repo</ProjectLink>
          </ProjectLinks>
        </ProjectContainer>

      </ProjectsContainer>
      <ProjectsAngleContainer>
        <AngleRight></AngleRight>
        <AngleLeft></AngleLeft>
      </ProjectsAngleContainer>
    </ProjectsSectionContainer>
  );
}

export default Projects;