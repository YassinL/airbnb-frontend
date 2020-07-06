import React from "react";
import Home from "./Home";
import Places from "./Places";

import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path="/places">
        <Places />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
