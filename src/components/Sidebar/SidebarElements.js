import styled from "styled-components";
import {Link as LinkS} from "react-scroll";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 998;
  width:100%;
  height: 40%;
  background-color: dodgerblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }) => ( isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => ( isOpen ? "0" : "-100%")};
`

export const Icon = styled.div`
  font-size: 2rem;
  cursor: pointer;

`

export const SidebarLinksContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.4rem;
  padding-top: 10%;
  color: #262626;
`

export const SidebarLink = styled(LinkS)`
  cursor: pointer;
  &:hover {
    color: whitesmoke;
    transition: 0.2s ease-in-out;
  }
`