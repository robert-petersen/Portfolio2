import React, { useState, useEffect } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";
import { NavContainer, NavLinksContainer, NavLink, NavTitle, MobileIcon } from "./NavBarElements";

function NavBar({toggle, isOpen}) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 60) {
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <NavContainer scrollNav={scrollNav}>
      <NavTitle to="/" onClick={toggleHome} >Robert Petersen</NavTitle>
      <MobileIcon onClick={ toggle } isOpen={isOpen} >
        <FaBars className="bars"/>
        <FaTimes className="times"/>
      </MobileIcon>
      <NavLinksContainer>
        <NavLink to="/" >About</NavLink>
        <NavLink to="/" >Projects</NavLink> 
        <NavLink to="/" >Contact</NavLink>
      </NavLinksContainer>
    </NavContainer>
  );
}

export default NavBar;