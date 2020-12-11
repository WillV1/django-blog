import React, { Fragment, useEffect } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alerts = ({error, alert, message}) => {

  useEffect(() => {
    const handleProps = () => {
      if (error) {
        if (error.msg.title) alert.error('Title is required');
        if (error.msg.text) alert.error('Text is required');
        if (error.msg.name) alert.error('Author is required');
      }
      if(message) {
        if(message.postDeleted) alert.success(message.postDeleted);
        if(message.postAdded) alert.success(message.postAdded);
        if(message.profileUpdated) alert.success(message.profileUpdated);
      }
    }
    handleProps();
  },[error, message])

  return <Fragment />
}

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));