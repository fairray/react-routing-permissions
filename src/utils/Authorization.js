import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const Authorization = (allowedRoles) => {
  return (WrappedComponent) => {
    const WithAuthorization = props => {
      const {isLoggedIn, user} = props; 
      if (!isLoggedIn){
        return <Redirect to="/login"/>;
      }
      if (!allowedRoles.includes(user.role)){
        return <h1>No page for you!</h1>;
      }
      return <WrappedComponent {...props}/>;
    };
    WithAuthorization.propTypes = {
      isLoggedIn: PropTypes.bool.isRequired,
      user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    };
    return connect((state) => {
      return {
        isLoggedIn: state.auth.isLoggedIn,
        user: state.user,
      }
    })(WithAuthorization);
  }
};
export default Authorization;