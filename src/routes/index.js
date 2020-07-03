import React from 'react';
import {
  HashRouter, Route, Switch
} from 'react-router-dom';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import ShowMovie from '~/pages/ShowMovie';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/random-movie" component={ShowMovie} />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

export default Routes;
