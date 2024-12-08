import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="mailto:your-email@example.com"><FaEnvelope className="icon-lg" /></Nav.Link>
          <Nav.Link href="https://github.com/your-github" target="_blank" rel="noopener noreferrer"><FaGithub className="icon-lg" /></Nav.Link>
          <Nav.Link href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon-lg" /></Nav.Link>
          <Nav.Link href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon-lg" /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <Navbar.Text className="mx-auto">
      &copy; {new Date().getFullYear()} Dipak Mahajan
    </Navbar.Text>
  </Navbar>
  );
};

export default Footer;

