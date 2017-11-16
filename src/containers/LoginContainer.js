import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';
import Spinner from '../components/Spinner';
import LoginPage from '../pages/LoginPage';

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  }
  render() {
    const { isLoggedIn, isFetching} = this.props;
     if ( isFetching ) {
        return <Spinner/>
      }
     if (isLoggedIn) {
       return <Redirect to="/" />
     }
    return (<LoginPage login={this.props.login}/>)
  }
}

function mapStateToProps(state) {
  return { isLoggedIn: state.auth.isLoggedIn, isFetching: state.auth.isFetching};
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);