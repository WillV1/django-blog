import React, { Fragment, useEffect, useRef } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alerts = ({error, alert}) => {

  useEffect(() => {
    const handleProps = () => {
      if (error) {
        if (error.msg.title) alert.error('Title is required');
        if (error.msg.text) alert.error('Text is required');
        if (error.msg.name) alert.error('Author is required');
      }
    }
    handleProps();
  },[error])

  return <Fragment />
}

Alerts.propTypes = {
  error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  error: state.errors
})

export default connect(mapStateToProps)(withAlert()(Alerts));