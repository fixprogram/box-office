import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route path="/show/:id">
        <Show />
      </Route>

      <Route>
        <div>Not found</div>
      </Route>
    </Switch>
  );
};

export default App;
