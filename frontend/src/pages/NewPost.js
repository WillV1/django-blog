import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../actions/posts';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const NewPost = ({addPost}) => {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')


  const onSubmit = async e => {
    e.preventDefault();

    addPost({title, text, name, image});

    setTitle('')
    setText('')
    setName('')
    setImage('')

  };

  return (
    <Container className="container form">
    <h2>Add Post</h2>
    <Row> 
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="title" value={title}
          onChange={e => setTitle(e.target.value)}
          
          />
        </Form.Group>
          <Form.Group controlId="formGroupText">
          <Form.Label>Text</Form.Label>
        <Form.Control as="textarea" placeholder="Text" name="text" value={text}
        onChange={e => setText(e.target.value)}
        
        />
        </Form.Group>
          <Form.Group controlId="formGroupAuthor">
          <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" name="name" value={name}
        onChange={e => setName(e.target.value)}
        />
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input"
          onChange={e => setImage(e.target.files[0])}/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
      </Form>
    </Row>
    </Container>
  )
}

NewPost.propTypes = {
  addPost: PropTypes.func.isRequired,
}

export default connect(null, { addPost })(NewPost);