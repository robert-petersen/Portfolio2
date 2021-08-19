import React from 'react';
import { SidebarContainer, SidebarLinksContainer, SidebarLink } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarLinksContainer>
        <SidebarLink 
          to="about" 
          onClick={toggle} 
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-60}
        >About</SidebarLink>
        <SidebarLink 
          to="skills" 
          onClick={toggle} 
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-60}
        >Skills</SidebarLink>
        <SidebarLink 
          to="projects" 
          onClick={toggle} 
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-60}
        >Projects</SidebarLink>
        <SidebarLink 
          to="contact" 
          onClick={toggle} 
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-60}
        >Contact</SidebarLink>
      </SidebarLinksContainer>
    </SidebarContainer>
  )
}

export default Sidebar;
