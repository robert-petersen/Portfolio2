import React from "react";
import { AboutContainer, AboutLeftContainer, AboutRightContainer, AboutRightContainerTop, AboutRightContainerBottom, LeftTop, LeftBottom, AboutEducationContainer, AboutTopicContainer, IconBE, IconFE, IconRE, IconAC } from "./AboutElements";
import Robert from "../../images/me.jpg";

function About() {
  return (
    <AboutContainer id="about">
      <AboutLeftContainer>
        <LeftTop>
          <img className="my-photo" src={Robert} alt="Robert Petersen"/>
          <AboutEducationContainer>
            <h2>My Education</h2>
            <div>
              <a 
                href="https://lambdaschool.com/homepage" 
                target="_blank" 
                rel="noreferrer"
              >
                <img src="https://everipedia-storage.s3.amazonaws.com/ProfilePics/lambda-school__38385.jpeg" alt="Lambda Logo" />
              </a>
              <h3>Lambda School 2020 - 2021</h3>
            </div>
            <h4>Full-Stack Web Development</h4>
          </AboutEducationContainer>
        </LeftTop>
        <LeftBottom>
          <h2>Hello, I'm Robert Petersen.</h2>
          <p>
            I am a full-stack web developer who loves problem solving and building web applications from the ground up. When I'm not coding I enjoy playing video games, watching anything Star Wars, fishing, hiking, camping, and walking with my dog. I come from a retail background and have skills in customer service, sales, lower management, and time management. If you would like to know more about me check out my 
            <a 
              href="https://www.linkedin.com/in/robert-petersen808/" 
              target="_blank" 
              rel="noreferrer"
            > LinkedIn profile </a>
            or my 
            <a 
              href="https://resume.io/r/FFjx1r7fT" 
              target="_blank" 
              rel="noreferrer"
            > resume</a>.
          </p>
        </LeftBottom>
      </AboutLeftContainer>
      <AboutRightContainer>
        <AboutRightContainerTop>
          <AboutTopicContainer>
            <IconFE />
            <h1>Front End Development</h1>
            <p>
              Expertise using HTML, CSS, JavaScript, and Git version control to create beautiful websites.
            </p>
          </AboutTopicContainer>
          <AboutTopicContainer>
            <IconBE />
            <h1>Back End Development</h1>
            <p>
              Experience building RESTful databases using Knex, Express, and SQLite3 libraries to allow full access to data with CRUD operations. Able to create authorization for users with JWT or by using AWS or Firebase.
            </p>
          </AboutTopicContainer>
        </AboutRightContainerTop>
        <div></div>
        <AboutRightContainerBottom>
          <AboutTopicContainer>
            <IconRE />
            <h1>Responsive Design</h1>
            <p>
              Using responsive units, media queries, and development tools I create responsive applications that look great on any screen.
            </p>
          </AboutTopicContainer>
          <AboutTopicContainer>
            <IconAC />
            <h1>Accessability</h1>
            <p>
              Using semantic HTML practices, responsive font sizes, alt tags on images, and by keeping in mind color blindness I do my best to make my applications accessable to everyone.
            </p>
          </AboutTopicContainer>
          </AboutRightContainerBottom>
      </AboutRightContainer>
    </AboutContainer>
  );
}

export default About;