import React from "react";
import { NavContainer, NavLinksContainer, NavLink, NavTitle } from "./NavBarElements";

function NavBar() {
  return (
    <NavContainer>
      <NavTitle>Robert Petersen</NavTitle>
      <NavLinksContainer>
        <NavLink href="#" >About</NavLink>
        <NavLink href="#" >Projects</NavLink> 
        <NavLink href="#" >Contact</NavLink>
      </NavLinksContainer>
    </NavContainer>
  );
}

export default NavBar;