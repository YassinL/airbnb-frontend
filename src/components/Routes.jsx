import React, { useReducer } from "react";
import AuthContext from "./Context/Auth";
import Home from "./Home";
import Places from "./Places";
import OnePlace from "./OnePlace";
// import Signin from "./ModalSignin";

import { Switch, Route } from "react-router-dom";
import ModaleSignup from "./ModalSignup";

const initialState = {
  // isAuthenticated: false,
  // user: null,
  // token: null,
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || {},
};
const reducer = (state, action) => {
  console.log("ICI ACTION :", action);
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default function Routes() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authValue = {
    state,
    dispatch,
  };

  return (
    <AuthContext.Provider value={authValue}>
      <Switch>
        <Route path="/places/:id">
          {/* <div>{!state.isAuthenticated ? <Signin /> : <OnePlace />}</div> */}
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
    </AuthContext.Provider>
  );
}
