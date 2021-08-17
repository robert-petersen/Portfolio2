import styled from "styled-components";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

export const AboutContainer = styled.div`
  width: 100%;
  min-height: calc( 100vh - 60px );
  background-color: #e8e8e8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const AboutLeftContainer = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  color: #262626;

  @media screen and (max-width: 1300px) {
    width: 80%;
  }
`

export const LeftTop = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10vh;

  img{
    width: 30%;
    border-radius: 20px;
    box-shadow: 2px 2px 2px lightslategray;
  }

  @media screen and (max-width: 1300px) {
    margin-top: 10vh;
  }
`

export const AboutEducationContainer = styled.div`
  h2 {
    font-size: 1.6rem;
    padding-bottom: 2vh;
    margin-bottom: 1vh;
    border-bottom: 2px solid dodgerblue;
    padding-left: 1vw;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1vh;

    img {
      width: 30px;
    }
    h3 {
      font-size: 1.2rem;
      margin-left: 1vw;
      color: #333333;
    }
  }

  h4 {
    font-size: 1rem;
    padding-left: calc(30px + 1vw);
    color:  #404040;
  }
`

export const LeftBottom = styled.div`
  h2{
    font-size: 1.6rem;
    margin-top: 2vh;
    margin-bottom: 3vh;
    padding-bottom: 2vh;
    border-bottom: 2px solid dodgerblue;
    padding-left: 1vw;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.7;
    margin-bottom: 1vh;
    color:  #404040;
  }

  @media screen and (max-width: 1300px) {
    margin-bottom: 10vh;
  }
`

export const AboutRightContainer = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #262626;

  @media screen and (max-width: 1300px) {
    width: 80%;
  }
`

export const AboutLanguages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    width: 100%;
    font-size: 1.6rem;
    margin-bottom: 3vh;
    padding-bottom: 2vh;
    border-bottom: 2px solid dodgerblue;
    padding-left: 1vw;
  }
`

export const AboutTools = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10vh;

  h1 {
    width: 100%;
    font-size: 1.6rem;
    margin-bottom: 3vh;
    padding-bottom: 2vh;
    border-bottom: 2px solid dodgerblue;
    padding-left: 1vw;
  }

  @media screen and (max-width: 1300px) {
    margin-bottom: 10vh;
  }
`

export const AboutSkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

`

export const AboutSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`
export const IconTitle = styled.h2`
  font-size: 1.2rem;
  padding-top: 1vh;
  color: #404040;
`

export const IconHTML = styled(FaHtml5)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconCSS = styled(FaCss3Alt)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconJS = styled(SiJavascript)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconPY = styled(FaPython)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconSQL = styled(DiSqllite)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconREA = styled(FaReact)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconRED = styled(SiRedux)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconNO = styled(FaNodeJs)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconGIT = styled(FaGithubSquare)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconFIG = styled(FaFigma)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconPOST = styled(SiPostman)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconTREL = styled(FaTrello)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconVS = styled(SiVisualstudiocode)`
  font-size: 4.5rem;
  color: dodgerblue;
`