import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <div>
        main container
        {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
