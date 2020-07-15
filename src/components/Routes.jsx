import React from "react";
import Home from "./Home";
import Places from "./Places";
import OnePlace from "./OnePlace";

import { Switch, Route } from "react-router-dom";
import ModaleSignup from "./ModalSignup";

export default function Routes() {
  return (
    <Switch>
      <Route path="/places/:id">
        <OnePlace />
      </Route>
      <Route path="/places">
        <Places />
      </Route>
      <Route path="/signup">
        <ModaleSignup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
