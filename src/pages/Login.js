import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const Login = props => (
  <div>
        Login page
        <button onClick={props.login}>login</button>
  </div>
);
Login.propTypes = {
  login: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
