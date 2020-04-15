import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Cadastro from './pages/cadastro';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/cadastro/" component={Cadastro} />
    </Switch>
  </BrowserRouter>
);

export default Routes;