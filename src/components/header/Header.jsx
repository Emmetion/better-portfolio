import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from "reactstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCode, HiDocumentText } from "react-icons/hi";

import "./Header.css";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" fixed="top" style={{backgroundColor:"#6ca0dc", color: "white", height: "55px"}}>
      <NavbarBrand href="/" className="link">
        <b>Emmet Spencer</b>
      </NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar style={{marginTop: "5px"}}>
          <NavItem>
            <NavLink target="_blank" href="https://www.linkedin.com/in/emmet-spencer/" className="link">
              <FaLinkedin className="mb-1" size={20}/>{' '}LinkedIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank" href="https://github.com/Emmetion" className="link">
              <FaGithub className="mb-1" size={20}/>{' '}GitHub
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank" href="https://drive.google.com/file/d/1a9uznlbk2ZpZrAPst_fCJuNcXHHgNIf-/view?usp=sharing" className="link">
              <HiDocumentText className="mb-1" size={20}/>{' '}Resume
            </NavLink>
          </NavItem>
          <NavLink target="_blank" href="https://github.com/Emmetion/better-portfolio" className="link">
            <HiCode style={{marginBottom: "2px"}}size={22}/>{' '}Code
          </NavLink>
        </Nav>
      </Collapse>
      
    </Navbar>
  );
}

export default Header;
