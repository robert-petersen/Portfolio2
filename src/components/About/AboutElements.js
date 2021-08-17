import styled from "styled-components";

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
  min-height: 80vh;
  padding: 3vh 3vw;
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

  img{
    width: 30%;
    border-radius: 20px;
    box-shadow: 2px 2px 2px lightslategray;
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
    color:  #333333;
  }
`

export const LeftBottom = styled.div`
  h2{
    font-size: 1.4rem;
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
    color:  #333333;
  }
`

export const AboutRightContainer = styled.div`
  width: 42%;
  min-height: 80vh;
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
  width: 90%;
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
  width: 90%;
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

export const Icon = styled.img`
  width: 75px;
  height: 75px;

  @media screen and (max-width: 1300px) {
    width: 60px;
    height: 60px;
  }
`

export const IconTitle = styled.h2`
  font-size: 1.2rem;
  padding-top: 1vh;

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
  margin: 20px;
`