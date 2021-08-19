import styled from "styled-components";

export const ProjectsSectionContainer = styled.section`
  min-height: calc( 100vh - 60px );
  width: 100%;
  max-width: 100vw;
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ProjectsHeading = styled.h1`
  width: 70%;
  font-size: 2.4rem;
  color: #262626;
  padding-bottom: 1vh;
  border-bottom: 2px solid dodgerblue;
  margin-bottom: 10vh;
  margin-top: 15vh;
  padding-left: 1vw;

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`

export const ProjectsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10vh;

  @media screen and (max-width: 350px) {
    width: 95%;
  }
`

export const ProjectContainer = styled.div`
  width: calc((100% - 9%)/3);
  height: 600px;
  background-color: #404040;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5vh;
  padding: 2%;
  box-shadow: 4px 4px 2px lightslategray;
  border-bottom: 3px solid transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    border-bottom: 3px solid dodgerblue;
    box-shadow: 2px 2px 2px lightslategray;
  }

  @media screen and (max-width: 1350px) {
    width: calc((100% - 6%)/2);
  }

  @media screen and (max-width: 900px) {
    width: 80%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    padding: 4%;
  }

  @media screen and (max-width: 350px) {
    padding: 10%;
  }
`

export const ProjectTopContainer = styled.div`
  width: 100%;
  height: fit-content;
`

export const ProjectImg = styled.img`
  height: 25vh;
  width: 100%;
  margin-bottom: 2vh;
`

export const ProjectTitle = styled.h2`
  width: 75%;
  color: white;
  font-size: 1.8rem;
  padding-bottom: 1vh;
  border-bottom: 1px solid dodgerblue;
  margin-bottom: 2vh;

  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
`

export const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: lightgray;
  line-height: 1.4;

  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`

export const ProjectLinks = styled.div`

`

export const ProjectLink = styled.a`
  margin-right: 20px;
  color: lightgrey;
  text-decoration: none;

  &:hover {
    color: dodgerblue;
    text-decoration: underline;
  }
`

export const ProjectsAngleContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #e8e8e8;
  display: flex;
`

export const AngleRight = styled.div`
  width: 50%;
  height: 10vh;
  background-color: #404040;
  clip-path: polygon(0 100%, 0 0, 100% 100%);
`

export const AngleLeft = styled.div`
  width: 50%;
  height: 10vh;
  background-color: #404040;
  clip-path: polygon(100% 100%, 100% 0, 0 100%);
`