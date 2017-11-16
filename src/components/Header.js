import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Menu} from 'semantic-ui-react';
// import PropTypes from 'prop-types';
const HeaderComponent = ({templateActions, sidebarIsOpened}) => {
  const toggleVisibility = () => {
    return sidebarIsOpened
      ? templateActions.closeSidebar()
      : templateActions.openSidebar();
  }
  return (
    <Menu fixed='top' inverted>
      <Menu.Item>
        <Button secondary toggle icon='sidebar' onClick={toggleVisibility}/>
      </Menu.Item>
      <Menu.Item>
        Project Name
      </Menu.Item>
      <Menu.Item >
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item >
        <Link to="/user">User</Link>
      </Menu.Item>
      <Menu.Item >
        <Link to="/user/info">User info</Link>
      </Menu.Item>
      <Menu.Item >
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item >
        <Link to="/dashboard/info">Dashboard info</Link>
      </Menu.Item>
      <Menu.Item >
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  )
};

export default HeaderComponent;
