import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getProfile } from '../actions/profiles';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const DashBoard = ({getProfile, profile: {profile, loading}, auth: {user}}) => {

  useEffect(() => {
    getProfile()
  }, [getProfile]);

  return ( 
    <Container>
  {!loading && profile !== null ? 
    <Fragment>
      <h2>Welcome {user && user.username}</h2>
      </Fragment> : 
    <Fragment>
      <h2>Welcome {user && user.username}</h2>
      <p>Create a profile here to start blogging!</p>
      <Link to="/addprofile">
        <Button variant="primary">Create Profile</Button>
      </Link>
    </Fragment>}
  </Container>
  )
}

DashBoard.propTypes = {
  getProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profiles
})

export default connect(mapStateToProps, { getProfile })(DashBoard);