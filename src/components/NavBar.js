import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg= "dark" variant="dark">
          <Container
          style={{ height: "10vh" , minWidth:"210vh"}}>
          <Navbar.Brand href="/">
          <img src = "./logo2.png" alt="" width="60" height="70"/>
         
          </Navbar.Brand>
          
            <Navbar.Brand href="/">Music station</Navbar.Brand>
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
