import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: whitesmoke;
  position: sticky;
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
`

export const NavLink = styled.a`
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
`

export const NavTitle = styled.div`

`