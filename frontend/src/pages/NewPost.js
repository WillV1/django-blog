import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../actions/posts';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const NewPost = () => {

  const [state, setState] = useState({
    title: '',
    text: '',
    name: '',
    image: '', 
    date: ''
  })

  const  {title, text, name, image, date } = state;

  const history = useHistory()

  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();

    addPost({title, text, name, image, date});

    setState({
      title: '',
      text: '',
      name: '',
      image: '',
      date: ''
    });

    history.goBack();
  };

  return (
    <Container className="container" className="form">
    <h2>Add Post</h2>
    <Row> 
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="title" value={title}
          onChange={e => onChange(e)}
          />
        </Form.Group>
          <Form.Group controlId="formGroupText">
          <Form.Label>Text</Form.Label>
        <Form.Control as="textarea" placeholder="Text" name="text" value={text}
        onChange={e => onChange(e)}/>
        </Form.Group>
          <Form.Group controlId="formGroupAuthor">
          <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" name="name" value={name}
        onChange={e => onChange(e)}/>
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input" value={image}
          name="image" onChange={e => onChange(e.target.files[0])}/>
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