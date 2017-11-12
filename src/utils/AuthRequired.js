import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRequired = (ProtectedComponent) => {
  const AuthHOC = props => (
    props.isLoggedIn ?
      (
        <ProtectedComponent {...props} />) :
      (
        <Redirect to="/login" />
      )
  );
  AuthHOC.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };
  function mapStateToProps(state) {
    return {
      isLoggedIn: state.auth.isLoggedIn,
    };
  }
  return connect(mapStateToProps)(AuthHOC);
};
export default AuthRequired;
