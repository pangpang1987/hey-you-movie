import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';



import HomePage from '../pages/HomePage';

const appRouter = store => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default appRouter;
