import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Links = lazy(() => import('./links/Links'));

const Overview = lazy(() => import('./analytics/Overview'));
const Geographic = lazy(() => import('./analytics/Geographic'));
const Device = lazy(() => import('./analytics/Device'));

const LinkTracking = lazy(() => import('./tracking/LinkTracking'));

const Profile = lazy(() => import('./settings/Profile'));
const Advanced = lazy(() => import('./settings/Advanced'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route exact path="/links" component={ Links } />

          <Route path="/analytics/overview" component={ Overview } />
          <Route path="/analytics/geographic" component={ Geographic } />
          <Route path="/analytics/device" component={ Device } />

          <Route path="/tracking/link-tracking" component={ LinkTracking } />

          <Route path="/settings/profile" component={ Profile } />
          <Route path="/settings/advanced" component={ Advanced } />


          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;