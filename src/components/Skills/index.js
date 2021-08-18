import React from 'react';
import { SkillsContainer, SkillsTypeContainer, SkillContainer, Skill, IconTitle, IconHTML, IconCSS, IconJS, IconPY, IconSQL, IconREA, IconRED, IconNO, IconGIT, IconFIG, IconPOST, IconTREL, IconVS, IconSC, IconKN, IconAWS, IconFIRE, IconJWT } from "./SkillsElements";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsTypeContainer>          
        <h1>Languages, Frameworks, and Libraries</h1>
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
          <Skill>
            <IconSC />
            <IconTitle>Styled Components</IconTitle>
          </Skill>
          <Skill>
            <IconKN />
            <IconTitle>Knex.js</IconTitle>
          </Skill>
          <Skill>
            <IconJWT />
            <IconTitle>JWT</IconTitle>
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
          <Skill>
            <IconAWS />
            <IconTitle>AWS</IconTitle>
          </Skill>
          <Skill>
            <IconFIRE />
            <IconTitle>Firebase</IconTitle>
          </Skill>
        </SkillContainer>
      </SkillsTypeContainer>
    </SkillsContainer>
  )
}

export default Skills;
