import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import {Container} from 'semantic-ui-react';
import * as templateActions from '../actions/template';

class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    sidebarIsOpened: PropTypes.bool.isRequired
  }

  render() {
    const { sidebarIsOpened, templateActions } = this.props;
    return (
      <Container fluid style={{height: 'calc(100% - 85px)', paddingTop:'48px'}}>
      <Header templateActions={templateActions} sidebarIsOpened={sidebarIsOpened}/>
      <Sidebar visible={sidebarIsOpened}>
        <Main >
          {this.props.children}
        </Main>
      </Sidebar>
      <Footer />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return { sidebarIsOpened: state.template.sidebarIsOpened};
}

function mapDispatchToProps(dispatch) {
  return {
    templateActions: bindActionCreators(templateActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
