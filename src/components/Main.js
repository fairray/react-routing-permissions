import React from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <Container fluid>
        {children}
  </Container>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;