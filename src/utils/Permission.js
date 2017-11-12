import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Permission = (Component) => {
  const role = 'admin'; // fake
  const AuthHOC = (props) => {
    const { permission } = props;
    const access = permission.includes(role);
    return (props.isLoggedIn && access ?
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
    };
  }
  return connect(mapStateToProps)(AuthHOC);
};
export default Permission;
