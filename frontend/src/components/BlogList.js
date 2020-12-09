import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BlogCard from './BlogCard';
import { getPosts } from '../actions/posts';

const BlogList = ({getPosts, posts}) => {

  useEffect (() => {
    getPosts();
  }, [getPosts])

  const post = posts.map((post,index) => 
  <BlogCard key={post.id} post={post}/ >)

  return (
    <div className="container">
      <h2 className="title">Posts</h2>
      {post}
    </div>
  )
}

BlogList.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(mapStateToProps, { getPosts })(BlogList);
