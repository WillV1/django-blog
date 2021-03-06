import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Login = ({login, isAuthenticated}) => {

  const [state, setState ] = useState({
    username: '',
    password: '',

  })

  const { username, password } = state;

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = async e => {
    e.preventDefault();

    login(username, password)

    setState({
      username: '',
      password: '',
    });
  };

  if(isAuthenticated){
    return <Redirect to='/dashboard' />
  }

  return (
    <Container className="container form">
    <h2>Log In</h2>
    <Row> 
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" name="username" 
          value={username}
          onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupText">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" 
          value={password} onChange={e => onChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
        Log in
        </Button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </Form>
    </Row>
    </Container>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login} )(Login);