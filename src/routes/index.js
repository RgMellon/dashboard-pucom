import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Store from '../pages/Store';
import CreateCupom from '../pages/CreateCupom';
import EditCupom from '../pages/EditCupom';
import ListCupons from '../pages/ListCupons';
// import MeetappDetail from '../pages/MeetappDetail';
// import MeetapppUpdate from '../pages/MeetappUpdate';
// import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/store" component={Store} isPrivate />
      <Route path="/listar/cupons" component={ListCupons} isPrivate />
      <Route exact path="/criar/cupom" component={CreateCupom} isPrivate />
      <Route exact path="/editar/cupom" component={EditCupom} isPrivate />
    </Switch>
  );
}
