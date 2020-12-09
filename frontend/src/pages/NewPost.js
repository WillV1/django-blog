import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const NewPost = () => {
  return (
    <Container className="container" className="form">
    <Row>
    <Form>
    <Form.Group controlId="formGroupTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" />
    </Form.Group>
      <Form.Group controlId="formGroupText">
      <Form.Label>Text</Form.Label>
    <Form.Control as="textarea" placeholder="Text" />
    </Form.Group>
      <Form.Group controlId="formGroupAuthor">
      <Form.Label>Author</Form.Label>
    <Form.Control type="text" placeholder="Enter author" />
    </Form.Group>
    <Form.Group>
      <Form.File id="exampleFormControlFile1" label="Example file input" />
    </Form.Group>
  </Form>
    </Row>
    </Container>
    
  )
}

export default NewPost;