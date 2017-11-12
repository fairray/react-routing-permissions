import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserInfo from '../pages/UserInfo';
import UserStatistics from '../pages/UserStatistics';

const UserRoutes = ({
  match,
}) => (
  <Switch>
    <Route path={`${match.path}`} exact render={() => (<div>User main page</div>)} />
    <Route path={`${match.path}/info`} exact component={UserInfo} />
    <Route path={`${match.path}/statistics`} exact component={UserStatistics} />
    <Redirect to={match.url} />
  </Switch>);
UserRoutes.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default UserRoutes;
