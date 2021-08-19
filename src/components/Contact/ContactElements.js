import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { RiMediumFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";

export const ContactContainer = styled.div`
  width: 100%;
  min-height: calc( 100vh - 60px );
  background-color: #404040;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ContactSectionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`

export const ContactLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const ContactRight = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const ContactTitle = styled.h1`
  width: 100%;
  margin-top: 20vh;
  font-size: 2.4rem;
  padding-bottom: 1vh;
  border-bottom: 2px solid dodgerblue;
  margin-bottom: 5vh;
  padding-left: 1vw;
  color: white;
`

export const ContactParagraph = styled.p`
  font-size: 1.4rem;
  color: lightgrey;
  line-height: 1.4;

  span {
    color: whitesmoke;
    transition: 0.3s ease-in-out;
    &:hover {
      color: dodgerblue;
    }
  }
  a {
    color: whitesmoke;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    &:hover {
      color: dodgerblue;
    }
  }
`

export const SocialMediaContainer = styled.div`
  width: 100%;
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const SocialLink = styled.a`
  text-decoration: none;
  margin: 20px;
`

export const ContactCopyright = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CopyrightText = styled.h3`
  font-size: .8rem;
  color: dodgerblue;
  margin-left: .5rem;

`

export const IconLinkedIn = styled(FaLinkedin)`
  font-size: 3rem;
  color: dodgerblue;
  transition: 0.3s ease-in-out;
  &:hover {
    color: white;
  }
`

export const IconGitHub = styled(FaGithubSquare)`
  font-size: 3rem;
  color: dodgerblue;
  transition: 0.3s ease-in-out;
  &:hover {
    color: white;
  }
`

export const IconMedium = styled(RiMediumFill)`
  font-size: 3.5rem;
  color: dodgerblue;
  transition: 0.3s ease-in-out;
  &:hover {
    color: white;
  }
`

export const CopyRight = styled(BiCopyright)`
  font-size: 1rem;
  color: dodgerblue;
`
