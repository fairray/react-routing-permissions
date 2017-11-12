import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Header = () => (
  <div>
    header container
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/user">User</Link></li>
      <li>
        <ul>
          <li><Link to="/user/info">User info</Link></li>
          <li><Link to="/user/statistics">User statistics</Link></li>
        </ul>
      </li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li>
        <ul>
          <li><Link to="/dashboard/info">Dashboard info</Link></li>
        </ul>
      </li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </div>
);

export default Header;
