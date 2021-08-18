import React from 'react';
import { SkillsContainer, SkillsTypeContainer, SkillContainer, Skill, IconTitle, IconHTML, IconCSS, IconJS, IconPY, IconSQL, IconREA, IconRED, IconNO, IconGIT, IconFIG, IconPOST, IconTREL, IconVS } from "./SkillsElements";

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsTypeContainer>          
        <h1>Languages</h1>
        <SkillContainer>
          <Skill>
            <IconHTML />
            <IconTitle>HTML</IconTitle>
          </Skill>
          <Skill>
            <IconCSS />
            <IconTitle>CSS</IconTitle>
          </Skill>
          <Skill>
            <IconJS />
            <IconTitle>JavaScript</IconTitle>
          </Skill>
          <Skill>
            <IconPY />
            <IconTitle>Python</IconTitle>
          </Skill>
          <Skill>
            <IconSQL />
            <IconTitle>SQLite</IconTitle>
          </Skill>
        </SkillContainer>
      </SkillsTypeContainer>
      <SkillsTypeContainer>
        <h1>Frameworks and Libraries</h1>
        <SkillContainer>
          <Skill>
            <IconREA />
            <IconTitle>React.js</IconTitle>
          </Skill>
          <Skill>
            <IconRED />
            <IconTitle>Redux.js</IconTitle>
          </Skill>
          <Skill>
            <IconNO />
            <IconTitle>Node.js</IconTitle>
          </Skill>
        </SkillContainer>
      </SkillsTypeContainer>
      <SkillsTypeContainer>
        <h1>Tools</h1>
        <SkillContainer>
          <Skill>
            <IconGIT />
            <IconTitle>GitHub</IconTitle>
          </Skill>
          <Skill>
            <IconFIG />
            <IconTitle>Figma</IconTitle>
          </Skill>
          <Skill>
            <IconPOST />
            <IconTitle>Postman</IconTitle>
          </Skill>
          <Skill>
            <IconTREL />
            <IconTitle>Trello</IconTitle>
          </Skill>
          <Skill>
            <IconVS />
            <IconTitle>VS Code</IconTitle>
          </Skill>
        </SkillContainer>
      </SkillsTypeContainer>
    </SkillsContainer>
  )
}

export default Skills;
