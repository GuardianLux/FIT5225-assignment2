import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./containers/sign-in";
import SignUp from "./containers/SignUp";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound"
import Upload from "./containers/Upload"
import Navigation from "./containers/Navigation"
import Query from "./containers/Query"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/SignIn">
        <SignIn />
      </Route>
      <Route exact path="/SignUp">
        <SignUp />
      </Route>
      <Route exact path="/Upload">
        <Upload />
      </Route>
      <Route exact path="/Query">
        <Query />
      </Route>
      <Route>
        <Navigation exact path="/Navigation"> /</Navigation>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}