import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Main from '../components/Main';
import Footer from '../components/Footer';

const PublicLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <div>
        <Main>
          <Component {...props} />
        </Main>
        <Footer />
      </div>)
} />);


PublicLayout.propTypes = {
  component: PropTypes.func.isRequired,
};


export default PublicLayout;
