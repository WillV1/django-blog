import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const NavBar = ({auth: {isAuthenticated, user, loading}, logout}) => {

  const authLinks = (
    <Navbar bg="info" variant="dark" expand="lg">
      <Navbar.Brand href="/">Fit Life</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/addpost">Add Post</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/addprofile">Add Profile</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Link className="logout" onClick={logout} to="/">Log Out</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  const guestLinks = (
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
        <Nav.Link href="/articles">Home</Nav.Link>
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
  );

  return (
    <Fragment>
    {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks} </Fragment>}
    </Fragment>
  )
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(NavBar);