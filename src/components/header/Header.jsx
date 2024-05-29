import { useState } from "react";
import { motion } from "framer-motion";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, NavbarText, Collapse } from "reactstrap";

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './Header.css'

function Header() {
    return (
      <div>
        <Navbar expand={true} fixed='top' style={{backgroundColor: "#6ca0dc", color: "white"}}>
          <NavbarBrand href="/" className="link">Emmet Spencer</NavbarBrand>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/projects/" className="link ms-auto">
                  <FaLinkedin />
                  {'  '}
                  LinkedIn
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="https://github.com/Emmetion" className="link ms-auto">
                  <FaGithub />
                  {'  '}
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="ms-auto">
              <NavLink className="link" href="https://drive.google.com/file/d/1Sm8XceBqsT1B2fJGOyyP-1ssVjwtqioI/view?usp=drive_link">
              Resume
              </NavLink>
            </NavbarText>
        </Navbar>
      </div>
    );
  }
  
  export default Header;