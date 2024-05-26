import { useState } from "react";
import { motion } from "framer-motion";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, NavbarText, Collapse } from "reactstrap";

import { FaGithub, FaHome } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar expand={true} fixed='top' style={{backgroundColor: "white"}}>
          <NavbarBrand href="/">Emmet Spencer</NavbarBrand>
          <NavbarToggler onClick={toggle} >ttt</NavbarToggler>
          <Collapse isOpen={isOpen} navbar className="flexbar">
            <Nav className="me-auto" navbar>
              <NavItem className='centered-item '>
                <NavLink href="/home/">
                  <FaHome />
                  {'  '}
                  Home
                </NavLink>
              </NavItem>
              <NavItem className='centered-item '>
                <NavLink href="/projects/">
                  <HiOutlineCode />
                  {'  '}
                  Projects
                </NavLink>
              </NavItem>
              <NavItem className="centered-item">
                <NavLink href="https://github.com/Emmetion">
                  <FaGithub />
                  {'  '}
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
  
              
              {/* <UncontrolledDropdown nav inNavbar={true}>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
            <NavbarText>
              <NavLink href="https://google.com">
              Resume
              </NavLink>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Header;