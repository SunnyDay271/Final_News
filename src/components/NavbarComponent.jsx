import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect (() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  })
  
  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""} >
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">GZ News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((Data) => {
              return(
                <div className="nav-link shadow-sm" key={Data.id}>
                <NavLink to={Data.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }end>{Data.text}</NavLink>
              </div>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
};

export default NavbarComponent;