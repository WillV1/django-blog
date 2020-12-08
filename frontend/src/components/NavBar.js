import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Django Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/addpost">Add Post</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
      <Nav.Link href="/dashboard">Home</Nav.Link>
      <Nav.Link href="#link">Log Out</Nav.Link>
      <Nav.Link href="/register">Sign Up</Nav.Link>
      <Nav.Link href="/login">Log In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar;