import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const NewPost = () => {
  return (
    <Container>
    <Form>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>
          <Form.Group controlId="formGroupText">
          <Form.Label>Text</Form.Label>
        <Form.Control type="textarea" placeholder="Text" />
        </Form.Group>
          <Form.Group controlId="formGroupAuthor">
          <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" />
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input" />
        </Form.Group>
      </Form>
    </Container>
    
  )
}

export default NewPost;