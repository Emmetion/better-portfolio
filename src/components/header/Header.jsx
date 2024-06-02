import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, Button, NavbarToggler } from "reactstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

import "./Header.css";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" fixed="top" style={{backgroundColor:"#6ca0dc", color: "white"}}>
      <NavbarBrand href="/" className="me-auto link">
        <b>Emmet Spencer</b>
      </NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink target="_blank" href="https://www.linkedin.com/in/emmet-spencer/" className="link">
              <FaLinkedin className="mb-1"/>{' '}LinkedIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank" href="https://github.com/Emmetion" className="link">
              <FaGithub className="mb-1"/>{' '}GitHub
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink target="_blank" href="https://drive.google.com/file/d/1Sm8XceBqsT1B2fJGOyyP-1ssVjwtqioI/view?usp=drive_link" className="link">
              <HiDocumentText className="mb-1"/>{' '}Resume
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;