import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../actions/posts';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

const BlogCard = ({deletePost, post: {id, title, text, name}}) => {
  return (
    <Container>
      <Row>
        <Col> 
          <h5>{title}</h5>
          <p>By: {name}</p></Col>
          <Col></Col>
          <Col><Link to={`/post/${id}`}>
          <Button variant="primary">View Post</Button>
          </Link>
          <Button onClick={e => deletePost(id)} variant="danger">Delete Post</Button>
        </Col>
      </Row>
    </Container>
  )
}

BlogCard.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(mapStateToProps, {deletePost})(BlogCard);