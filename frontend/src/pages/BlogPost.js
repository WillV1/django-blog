import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPost } from '../actions/posts';
import Spinner from '../layouts/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const BlogPost = ({ getPost, post: {post, loading}, match }) => {

  console.log(post);

  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return loading || post === null ? <Spinner /> : <Fragment>
    <Container>
      <Row>
        <Col>
          <img src={post.image} alt="Blog image" />
          <h3>{post.title}</h3>
          <h6>Written on: {post.date}</h6>
          <p>{post.text}</p> 
        </Col>
      </Row>
      <Row>
        <Col>
        <Button variant="primary">Edit Post</Button>
        </Col>
      </Row>
    </Container>
  </Fragment>

  
}

BlogPost.propTypes = {
  posts: PropTypes.array.isRequired,
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  post: state.posts,
  posts: state.posts.posts
})

export default connect(mapStateToProps, {getPost})(BlogPost);