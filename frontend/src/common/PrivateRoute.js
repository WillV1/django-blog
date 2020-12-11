import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layouts/Spinner';

const PrivateRoute = ({component: Component, auth, ...rest}) =>  (
    <Route 
    {...rest}
    render={props => {
      if(auth.isLoading) {
        return <Spinner />
      } else if (!auth.isAuthenticated) {
        return <Redirect to="/login" />
      } else {
        return <Component {...props} />
      }
    }}
    />
  )

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);