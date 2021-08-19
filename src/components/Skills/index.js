import React from 'react';
import { SkillsContainer, SkillsTypeContainer, SkillContainer, Skill, IconTitle, IconHTML, IconCSS, IconJS, IconPY, IconSQL, IconREA, IconRED, IconNO, IconGIT, IconFIG, IconPOST, IconTREL, IconVS, IconSC, IconKN, IconAWS, IconFIRE, IconJWT } from "./SkillsElements";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsTypeContainer>          
        <h1>Languages, Frameworks, and Libraries</h1>
        <SkillContainer>
          <Skill>
            <IconHTML className="icon"/>
            <IconTitle>HTML</IconTitle>
          </Skill>
          <Skill>
            <IconCSS className="icon"/>
            <IconTitle>CSS</IconTitle>
          </Skill>
          <Skill>
            <IconJS className="icon"/>
            <IconTitle>JavaScript</IconTitle>
          </Skill>
          <Skill>
            <IconPY className="icon"/>
            <IconTitle>Python</IconTitle>
          </Skill>
          <Skill>
            <IconSQL className="icon"/>
            <IconTitle>SQLite</IconTitle>
          </Skill>
          <Skill>
            <IconREA className="icon"/>
            <IconTitle>React.js</IconTitle>
          </Skill>
          <Skill>
            <IconRED className="icon"/>
            <IconTitle>Redux.js</IconTitle>
          </Skill>
          <Skill>
            <IconNO className="icon"/>
            <IconTitle>Node.js</IconTitle>
          </Skill>
          <Skill>
            <IconSC className="icon"/>
            <IconTitle>Styled</IconTitle>
          </Skill>
          <Skill>
            <IconKN className="icon"/>
            <IconTitle>Knex.js</IconTitle>
          </Skill>
          <Skill>
            <IconJWT className="icon"/>
            <IconTitle>JWT</IconTitle>
          </Skill>
        </SkillContainer>
      </SkillsTypeContainer>
      <SkillsTypeContainer>
        <h1>Tools</h1>
        <SkillContainer>
          <Skill>
            <IconGIT className="icon"/>
            <IconTitle>GitHub</IconTitle>
          </Skill>
          <Skill>
            <IconFIG className="icon"/>
            <IconTitle>Figma</IconTitle>
          </Skill>
          <Skill>
            <IconPOST className="icon"/>
            <IconTitle>Postman</IconTitle>
          </Skill>
          <Skill>
            <IconTREL className="icon"/>
            <IconTitle>Trello</IconTitle>
          </Skill>
          <Skill>
            <IconVS className="icon"/>
            <IconTitle>VS Code</IconTitle>
          </Skill>
          <Skill>
            <IconAWS className="icon"/>
            <IconTitle>AWS</IconTitle>
          </Skill>
          <Skill>
            <IconFIRE className="icon"/>
            <IconTitle>Firebase</IconTitle>
          </Skill>
        </SkillContainer>
      </SkillsTypeContainer>
    </SkillsContainer>
  )
}

export default Skills;
