import React from "react";
import { AboutContainer, AboutLeftContainer, AboutRightContainer, AboutLanguages, AboutTools, Icon, IconTitle, AboutSkillContainer, AboutSkill, LeftTop, LeftBottom, AboutEducationContainer } from "./AboutElements";
import Robert from "../../images/me.jpg";
import { languagesData, toolsData } from "./data";

function About() {
  return (
    <AboutContainer id="about">
      <AboutLeftContainer>
        <LeftTop>
          <img className="my-photo" src={Robert} alt="Robert Petersen"/>
          <AboutEducationContainer>
            <h2>My Education</h2>
            <div>
              <img src="https://everipedia-storage.s3.amazonaws.com/ProfilePics/lambda-school__38385.jpeg" alt="Lambda Logo" />
              <h3>Lambda School 2020 - 2021</h3>
            </div>
            <h4>Full-Stack Web Development</h4>
          </AboutEducationContainer>
        </LeftTop>
        <LeftBottom>
          <h2>Hello, I'm Robert Petersen.</h2>
          <p>
            I am a full-stack web developer who loves problem solving and building web applications from the ground up. When I'm not coding I enjoy playing video games, watching anything Star Wars, fishing, hiking, camping, and walking with my dog. I come from a retail background and have skills in customer service, sales, lower management, and time management.
          </p>
        </LeftBottom>
      </AboutLeftContainer>
      <AboutRightContainer>
        <AboutLanguages>          
          <h1>Languages and Frameworks</h1>
          <AboutSkillContainer>
            {languagesData.map((data)=>(
              <AboutSkill>
                <Icon src={data.src} alt={data.alt} />
                <IconTitle>{data.title}</IconTitle>
              </AboutSkill>
            ))}
          </AboutSkillContainer>
        </AboutLanguages>
        <AboutTools>
          <h1>Tools</h1>
          <AboutSkillContainer>
            {toolsData.map((data)=>(
                <AboutSkill>
                  <Icon src={data.src} alt={data.alt} />
                  <IconTitle>{data.title}</IconTitle>
                </AboutSkill>
            ))}
          </AboutSkillContainer>
        </AboutTools>
      </AboutRightContainer>
    </AboutContainer>
  );
}

export default About;