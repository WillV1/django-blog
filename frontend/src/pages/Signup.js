import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Signup = () => {

  const [state, setState ] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const { username, email, password, password2 } = state;

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = async e => {
    e.preventDefault();

    console.log('submit');

    setState({
      username: '',
      email: '',
      password: '',
      password2: ''
    });
  };

  return (
    <Container className="container form">
    <h2>Sign Up</h2>
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
          <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="email" value={email}
        onChange={e => onChange(e)}
        />
        </Form.Group>
        <Form.Group controlId="formGroupText">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" 
          value={password} onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupText">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="password2" 
        value={password2} onChange={e => onChange(e)}
        />
      </Form.Group>
        <Button variant="primary" type="submit">
        Register
        </Button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </Form>
    </Row>
    </Container>
  )
}

export default Signup;