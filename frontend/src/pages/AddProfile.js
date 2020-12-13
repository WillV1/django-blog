import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { addProfile } from '../actions/profiles';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const AddProfile = ({addProfile, history}) => {

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [interest, setInterest] = useState('')
  const [picture, setPicture] = useState('')
  const [bio, setBio] = useState('')

  const onSubmit = async e => {
    e.preventDefault();

    addProfile({name, location, interest, picture, bio}, history);

    setName('')
    setLocation('')
    setInterest('')
    setPicture('')
    setBio('')

  };

  return (
    <Container className="container form">
    <h2>Add Profile</h2>
    <Row> 
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" 
          value={name}
          onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupText">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Set location" name="location" 
          value={location} onChange={e => setLocation(e.target.value)}
        />
        </Form.Group>
        <Form.Group controlId="formGroupText">
          <Form.Label>Bio</Form.Label>
        <Form.Control as="textarea" placeholder="Enter bio" name="bio" value={bio}
        onChange={e => setBio(e.target.value)}
        />
        </Form.Group>
        <Form.Group controlId="formGroupText">
          <Form.Label>Primary Interest</Form.Label>
          <Form.Control type="text" placeholder="Enter interest" name="interest" 
          value={interest} onChange={e => setInterest(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input"
          onChange={e => setPicture(e.target.files[0])}/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
      </Form>
    </Row>
    </Container>
  )
}

AddProfile.propTypes = {
  addProfile: PropTypes.func.isRequired,
}

export default connect(null, { addProfile })(withRouter(AddProfile));