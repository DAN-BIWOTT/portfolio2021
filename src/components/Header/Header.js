import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import logo from "../../Assets/mobile.svg"
const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src={logo}
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://docs.google.com/document/d/15x7QBuBbtmEeqRxD_rBneFYxy3d8w751/edit?usp=sharing&ouid=103112845827557686303&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
