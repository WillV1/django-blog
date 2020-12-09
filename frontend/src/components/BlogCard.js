import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

const BlogCard = ({post: {id, title, text, name}}) => {
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
        </Col>
      </Row>
    </Container>
  )
}

BlogCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default BlogCard;