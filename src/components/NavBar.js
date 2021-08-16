import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">
            <img src = "" alt=""/>
          </Navbar.Brand>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/play">Play Music</Nav.Link>
              <Nav.Link href="">Playlist</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>

            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
