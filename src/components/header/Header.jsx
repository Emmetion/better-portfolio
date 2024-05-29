import { useState } from "react";
import { motion } from "framer-motion";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, NavbarText, Collapse } from "reactstrap";

import { FaGithub, FaHome } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';

import './Header.css'

function Header() {
  
    return (
      <div>
        <Navbar expand={true} fixed='top' style={{backgroundColor: "white", color: "white"}}>
          <NavbarBrand href="/" className="link">Emmet Spencer</NavbarBrand>
            <Nav className="me-auto" navbar>
              <NavItem className='centered-item '>
                <NavLink href="/home/" className="link">
                  <FaHome />
                  {'  '}
                  Home
                </NavLink>
              </NavItem>
              <NavItem className='centered-item '>
                <NavLink href="/projects/"  className="link">
                  <HiOutlineCode />
                  {'  '}
                  Projects
                </NavLink>
              </NavItem>
              <NavItem className="centered-item">
                <NavLink href="https://github.com/Emmetion" className="link">
                  <FaGithub />
                  {'  '}
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/"  className="link">About</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="ms-auto ">
              <NavLink className="link" href="https://drive.google.com/file/d/1Sm8XceBqsT1B2fJGOyyP-1ssVjwtqioI/view?usp=drive_link">
              Resume
              </NavLink>
            </NavbarText>
        </Navbar>
      </div>
    );
  }
  
  export default Header;