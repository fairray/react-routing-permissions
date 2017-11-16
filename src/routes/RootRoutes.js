import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';
import Home from '../pages/Home';
import UserRoutes from '../routes/UserRoutes';
import DashboardRoutes from '../routes/DashboardRoutes';
import Authorization from '../utils/Authorization';
const Admin = Authorization(['admin']);
const User = Authorization(['user', 'admin']);


const RootRoutes = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User(UserRoutes)} />
      <Route path="/dashboard" component={Admin(DashboardRoutes)} />
      <Route path="/login" component={LoginContainer} />
      <Route component={() => ('404')} />
    </Switch>
  </BrowserRouter>
);

export default RootRoutes;
