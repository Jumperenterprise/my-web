import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

class Navigation extends React.Component {
  render() {
    return (
      <>
      <Navbar className="navigation" expand="lg" variant="dark" bg="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Andrew Alfaro
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#about">About me</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#portafolio">Portafolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
  }
}

const logo = '/img/logo.png'

export default Navigation
