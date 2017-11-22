import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';
import LoginPage from '../pages/LoginPage';

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  }
  render() {
    const { isLoggedIn} = this.props;
     if (isLoggedIn) {
       return <Redirect to="/" />
     }
    return (<LoginPage login={this.props.login}/>)
  }
}

function mapStateToProps(state) {
  return { isLoggedIn: state.auth.isLoggedIn };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);