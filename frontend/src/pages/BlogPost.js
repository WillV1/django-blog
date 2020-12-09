import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePost } from '../actions/posts';

const BlogPost = () => {
  return (
    <div>BlogPost</div>
  )
}

BlogPost.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(mapStateToProps, {deletePost})(BlogPost);