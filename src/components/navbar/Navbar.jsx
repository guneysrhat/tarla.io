import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.style";
import Nav, { Brand, Menu, MenuLink, Hamburger } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<Tarla-io/>"} </i>
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/">About</MenuLink>
        <MenuLink to="/">Register</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
