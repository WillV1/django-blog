import React, { Fragment, useEffect } from 'react';
import { withAlert } from 'react-alert';

const Alerts = () => {

  useEffect(() => {
    alert.show('It Works')
  },[])
  return <Fragment />
}

export default withAlert(Alerts);