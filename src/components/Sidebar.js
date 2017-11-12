import React, { Component } from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

class SidebarLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    // const { visible } = this.state;
    return (
      <Sidebar.Pushable as={Segment} />
    );
  }
}

export default SidebarLeft;
