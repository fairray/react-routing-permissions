import React, {Component} from 'react';
import {Sidebar, Container, Segment, Menu, Icon} from 'semantic-ui-react';
// import PropTypes from 'prop-types';

class SidebarLeft extends Component {
  render() {
    const {visible} = this.props;
    return (
      <Sidebar.Pushable as={Container} fluid>
        <Sidebar
          as={Menu}
          animation='push'
          width='thin'
          visible={visible}
          icon='labeled'
          vertical>
          <Menu.Item name='home'>
            <Icon name='home'/>
            Home
          </Menu.Item>
          <Menu.Item name='gamepad'>
            <Icon name='gamepad'/>
            Games
          </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='camera'/>
            Channels
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher
          style={{
          maxHeight: "100%",
          overflowY: "auto"
        }}>
          <Segment basic>
            {this.props.children}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default SidebarLeft;
