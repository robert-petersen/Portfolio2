import React, { useState, useEffect } from "react";
import {animateScroll as scroll} from "react-scroll";
import { NavContainer, NavLinksContainer, NavLink, NavTitle } from "./NavBarElements";

function NavBar() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <NavContainer scrollNav={scrollNav}>
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