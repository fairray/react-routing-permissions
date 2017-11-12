import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import PublicLayout from '../layouts/PublicLayout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import UserRoutes from '../routes/UserRoutes';
import AuthRequired from '../utils/AuthRequired';
import EnsureAuth from '../utils/EnsureAuth';
import Permission from '../utils/Permission';


const RootRoutes = props => (
  <BrowserRouter>
    <Switch>
      <DefaultLayout exact path="/" component={AuthRequired(Home)} />
      <DefaultLayout path="/user" permission={['admin']} component={Permission(UserRoutes)} />
      <PublicLayout path="/login" component={EnsureAuth(Login)} />
      <PublicLayout component={() => ('404')} />
    </Switch>
  </BrowserRouter>
);

export default RootRoutes;
