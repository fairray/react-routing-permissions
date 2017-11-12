import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import DashboardInfo from '../pages/DashboardInfo';

const DashboardRoutes = ({
  match,
}) => (
        <Switch>
            <Route path={`${match.path}`} exact render={() => (<div>Dashboard main page</div>)} />
            <Route path={`${match.path}/info`} exact component={DashboardInfo} />
            <Redirect to={match.url} />
        </Switch>);
DashboardRoutes.propTypes = {
    match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default DashboardRoutes;