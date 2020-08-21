import React from 'react';
import {
  BrowserRouter, Switch as Routes, Route
} from 'react-router-dom';

import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import ShowMovie from '~/pages/ShowMovie';

const ProjectRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/random-movie" component={ShowMovie} />
      <Route path="*" component={NotFound} />
    </Routes>
  </BrowserRouter>
);

export default ProjectRoutes;
