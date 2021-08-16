import React from "react";
import { AboutContainer, AboutLeftContainer, AboutRightContainer, AboutLanguages, AboutTools, Icon, IconTitle, AboutSkillContainer, AboutSkill } from "./AboutElements";
import Robert from "../../images/me.jpg";
import { languagesData, toolsData } from "./data";

function About() {
  return (
    <AboutContainer id="about">
      <AboutLeftContainer>
        <img className="my-photo" src={Robert} alt="Robert Petersen"/>
        <h2>Hello, I am Robert Petersen.</h2>
        <p>
          I am a full-stack web developer who loves problemand building web applications from the ground up. not coding I enjoy playing video games, watching Star Wars, fishing, hiking, camping, and walkingdog. I come from a retail background and have scustomer service, sales, lower management, management.
        </p>
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