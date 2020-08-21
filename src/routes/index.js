import React from 'react';
import {
  HashRouter, Switch as Routes, Route
} from 'react-router-dom';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import ShowMovie from '~/pages/ShowMovie';

const ProjectRoutes = () => (
  <HashRouter>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/random-movie" component={ShowMovie} />
      <Route path="*" component={NotFound} />
    </Routes>
  </HashRouter>
);

export default ProjectRoutes;
