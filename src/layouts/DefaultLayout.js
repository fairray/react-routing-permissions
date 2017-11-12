import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <div>
        <Header />
        <Sidebar />
        <Main >
          <Component {...props} {...rest} />
        </Main>
        <Footer />
      </div>)
     }
  />
);

DefaultLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export default DefaultLayout;
