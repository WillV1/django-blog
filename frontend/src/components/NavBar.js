import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <Navbar bg="info" variant="dark" expand="lg">
  <Navbar.Brand href="/">Fit Life</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Fitness</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Nutrition</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Recipes</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/addpost">Add Post</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="/addprofile">Add Profile</Nav.Link>
      <Nav.Link href="/dashboard">Home</Nav.Link>
      <Nav.Link href="#link">Log Out</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/register">Sign Up</Nav.Link>
      <Nav.Link href="/login">Log In</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <FontAwesomeIcon icon={faFacebook} /> 
        <FontAwesomeIcon icon={faTwitter} /> 
        <FontAwesomeIcon icon={faInstagram} />
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar;