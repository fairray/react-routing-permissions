import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Permission = (Component) => {
  const AuthHOC = (props) => {
    const { permission, isLoggedIn, user } = props;
    const access = permission.includes(user.role);
    return (isLoggedIn && access ?
      (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    );
  };
  AuthHOC.propTypes = {
    permission: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    isLoggedIn: PropTypes.bool.isRequired,
  };
  function mapStateToProps(state) {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      user: state.auth.user
    };
  }
  return connect(mapStateToProps)(AuthHOC);
};
export default Permission;
