import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar expand={true} fixed="top" style={{ backgroundColor: "#6ca0dc", color: "white" }}>
        <NavbarBrand href="/" className="link">
          <b>Emmet Spencer</b>
        </NavbarBrand>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/projects/" className="link" disabled>
              <FaLinkedin className="mb-1" />{' '}LinkedIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/Emmetion" className="link">
              <FaGithub className="mb-1"/>{' '}GitHub
            </NavLink>
          </NavItem>
        </Nav>
        <NavLink className="link ms-auto" href="https://drive.google.com/file/d/1Sm8XceBqsT1B2fJGOyyP-1ssVjwtqioI/view?usp=drive_link">
          <HiDocumentText className="mb-1"/>{' '}Resume
        </NavLink>
      </Navbar>
    </div>
  );
}

export default Header;
