import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export class NavbarComponent extends Component {
  render() {
    return (
      <Navbar className="border-bottom" bg="transparent" expand="lg">
        <Link  to="/">
        <Navbar.Brand className ="font-weight-bold">
          Swadhin Routray &copy;
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
            <Link className="nav-link lead" to="/">
              Home
            </Link>
            <Link className="nav-link lead" to="/about">
              About
            </Link>
            <Link className="nav-link lead" to="/skills">
              Skills
            </Link>
            <Link className="nav-link lead" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
