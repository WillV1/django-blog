import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import { getProfile } from '../actions/profiles';
import Container from 'react-bootstrap/Container';

const Profile = ({getProfile, profile: {profile, loading}, auth: {user}}) => {

  useEffect(() => {
    getProfile()
  }, [getProfile]);

  return <Fragment>
    {loading ? <Spinner /> : <Fragment>
      <Container>
        <h2>{user && user.username}'s Profile</h2>
        <img src={profile.personal_image} alt={user.username} />
        <h5>{profile.name}</h5>
        <p>Location: {profile.location}</p>
        <p>Join Date:{profile.join_date}</p>
        <p>Primary Interest: {profile.primary_interest}</p>
        <p>{profile.bio}</p>
      </Container>
      </Fragment>}
  </Fragment>
}

Profile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profiles
})

export default connect(mapStateToProps, { getProfile })(Profile);