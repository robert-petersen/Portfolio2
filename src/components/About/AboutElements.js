import styled from "styled-components";
import {FaDatabase} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import {FaBalanceScaleRight} from "react-icons/fa";
import {FaEye} from "react-icons/fa";

export const AboutContainer = styled.section`
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
    width: 100%;
    flex-direction: column;
    margin-bottom: 20vh;
  }
`

export const AboutRightContainerTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 2vh;

  @media screen and (max-width: 1300px) {
    width: 80%;
  }
`

export const AboutRightContainerBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1300px) {
    width: 80%;
  }
`

export const AboutTopicContainer = styled.div`
  width: calc(50% - 3vh);
  height: 30vh;
  background-color: #404040;
  box-shadow: 2px 2px 2px lightslategray;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 70%;
    text-align: center;
    margin-top: 2vh;
    padding-bottom: 1vh;
    border-bottom: 2vh;
    border-bottom: 1px solid dodgerblue;
    color: white;
  }

  p {
    margin-top: 1vh;
    line-height: 1.3;
    color: lightgray;
  }
`

export const IconFE = styled(CgWebsite)`
  font-size: 3rem;
  color: dodgerblue;
`
export const IconBE = styled(FaDatabase)`
  font-size: 3rem;
  color: dodgerblue;
`
export const IconRE = styled(FaBalanceScaleRight)`
  font-size: 3rem;
  color: dodgerblue;
`
export const IconAC = styled(FaEye)`
  font-size: 3rem;
  color: dodgerblue;
`