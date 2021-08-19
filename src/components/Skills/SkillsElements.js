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
import { SiStyledComponents } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiAmazonaws } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";

export const SkillsContainer = styled.section`
  background-color: whitesmoke;
  min-height: calc( 100vh - 60px );
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10vh;
  padding-bottom: 15vh;
`

export const SkillsTypeContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;

  h1 {
    width: 100%;
    font-size: 2.4rem;
    margin-bottom: 3vh;
    padding-bottom: 2vh;
    border-bottom: 2px solid dodgerblue;
    padding-left: 1vw;

    @media screen and (max-width: 710px) {
      font-size: 1.8rem;
      width: 80%;
    }
    @media screen and (max-width: 480px) {
      font-size: 1.4rem;
      width: 90%;
    }
  }

  .icon {
    @media screen and (max-width: 710px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
  }

  @media screen and (max-width: 710px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

`

export const Skill = styled.div`
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

export const IconSC = styled(SiStyledComponents)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconKN = styled(FaDatabase)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconAWS = styled(SiAmazonaws)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconFIRE = styled(SiFirebase)`
  font-size: 4.5rem;
  color: dodgerblue;
`

export const IconJWT = styled(SiJsonwebtokens)`
  font-size: 4.5rem;
  color: dodgerblue;
`