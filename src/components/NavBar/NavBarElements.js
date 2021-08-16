import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({scrollNav}) => (scrollNav ? "whitesmoke" : "transparent")};
  margin-top: -60px;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw;
`

export const NavLinksContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(LinkS)`
  flex: .3;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  height: 100%;
  transition: 0.3s ease-in-out;
  border-bottom: 3px solid transparent;

  &.active {
    border-bottom: 3px solid skyblue;
  }

  &:hover {
    /* background-color: lightblue; */
    border-bottom: 3px solid skyblue;
    transition: 0.3s ease-in-out;
    /* opacity: ${({scrollNav}) => (scrollNav ? "100%" : "60%")}; */
  }
`

export const NavTitle = styled(LinkR)`
  font-size: 1.6rem;
  text-decoration: none;
  color: black;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }

  .bars {
    display: ${({ isOpen }) => ( isOpen ? "none" : "block" )}
  }

  .times {
    display: ${({ isOpen }) => ( isOpen ? "block" : "none" )}
  }
`