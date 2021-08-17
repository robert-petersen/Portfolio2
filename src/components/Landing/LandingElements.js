import styled from "styled-components";
import {Link as LinkS} from "react-scroll";
import {MdArrowDownward, MdArrowForward} from "react-icons/md";

export const LandingContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: grey;
  position: relative;
  z-index: 1;
`

export const LandingVideoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const LandingVideo = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const LandingTextContainer = styled.div`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 20%;
  color: #262626;
  font-weight: bold;
`

export const LandingTextH1 = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  text-shadow: 3px 3px 2px lightslategray;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    text-shadow: 2px 2px 2px lightslategray;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.2rem;
    text-shadow: 2px 2px 2px lightslategray;
  }
`

export const LandingTextH2 = styled.h2`
  padding-top: 40px;
  font-size: 2.4rem;
  text-align: center;
  text-shadow: 3px 3px 2px lightslategray;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    text-shadow: 2px 2px 2px lightslategray;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
    text-shadow: 2px 2px 2px lightslategray;
  }
`

export const Button = styled(LinkS)`
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  padding: 10px;
  background-color: transparent;
  border: 2px solid #262626;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: dodgerblue;
    border: 2px solid dodgerblue;
    color: whitesmoke;
    box-shadow: 2px 2px 3px lightslategray;
  }

`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 1rem;
`

export const ArrowDownward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 1rem;
`