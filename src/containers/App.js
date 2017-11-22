import React, {Component} from 'react';
import {connect} from 'react-redux';
import RootRoutes from '../routes/RootRoutes';
import Spinner from '../components/Spinner';

class App extends Component {
  render() {
    const {isFetching} = this.props;
    return isFetching
      ? <Spinner/>
      : <RootRoutes/>
  }
}

export default connect((state) => ({isFetching: state.auth.isFetching}))(App);
