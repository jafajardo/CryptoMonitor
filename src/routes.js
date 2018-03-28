import React from 'react';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import Home from './components/home';

const loadModule = (cb) => {
  return module => cb(null, module.default);
}

const componentRoutes = {
  component: App,
  path: '/',
  indexRoute: { component: Home },
  childRoutes: []
}

const Routes = () => {
  return (
    <Router history={browserHistory} routes={componentRoutes} />
  );
}

export default Routes;