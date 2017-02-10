import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Credits from './components/credits';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="credits" component={Credits} />
  </Route>
);
