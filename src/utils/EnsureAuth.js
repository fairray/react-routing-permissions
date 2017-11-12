import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const EnsureAuth = (Component) => {
  const AuthHOC = props => (
    props.isLoggedIn ?
      (<Redirect to="/" />) :
      (<Component {...props} />
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
export default EnsureAuth;
