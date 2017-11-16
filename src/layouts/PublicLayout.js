import React from 'react';
import PropTypes from 'prop-types';
import {Container} from 'semantic-ui-react';
import Footer from '../components/Footer';

const PublicLayout = ({children}) => (
  <Container fluid style={{height: 'calc(100% - 85px)'}}>
    {children}
    <Footer/>
  </Container>
);
PublicLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PublicLayout;
