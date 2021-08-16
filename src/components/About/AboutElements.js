import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  min-height: calc( 100vh - 60px );
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const AboutLeftContainer = styled.div`
  width: 40%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img{
    width: 50%;
    height: 30%;
    border-radius: 20px;
  }
`

export const AboutRightContainer = styled.div`
  width: 40%;
  min-height: 80%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const AboutLanguages = styled.div``

export const AboutTools = styled.div``

export const Icon = styled.img`
  width: 50px;
  height: 50px;
`

export const IconTitle = styled.h2``

export const AboutSkillContainer = styled.div``

export const AboutSkill = styled.div``