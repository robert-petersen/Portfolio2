import React from 'react'
import { SidebarContainer, SidebarLinksContainer, SidebarLink } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarLinksContainer>
        <SidebarLink to="/" onClick={toggle} >About</SidebarLink>
        <SidebarLink to="/" onClick={toggle} >Projects</SidebarLink>
        <SidebarLink to="/" onClick={toggle} >Contact</SidebarLink>
      </SidebarLinksContainer>
    </SidebarContainer>
  )
}

export default Sidebar
