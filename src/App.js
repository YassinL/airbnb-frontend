import React, { useState, useReducer } from "react";
import "./sass/App.scss";
import Header from "./components/Header";
import Routes from "./components/Routes";
import Footer from "./components/Footer";
import ContextRecherche from "./components/Context/Context";
import AuthContext from "./components/Context/Auth";

import { BrowserRouter as Router } from "react-router-dom";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
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
        token: null,
      };
    default:
      return state;
  }
};

export default function App() {
  // barre de recherche
  const [recherche, setRecherche] = useState("");
  const contextValue = {
    recherche,
    setRecherche,
  };
  // Authentification
  const [state, dispatch] = useReducer(reducer, initialState);
  const authValue = {
    state,
    dispatch,
  };

  return (
    <Router>
      <AuthContext.Provider value={authValue}>
        <ContextRecherche.Provider value={contextValue}>
          <Header />
          <Routes />
          <Footer />
        </ContextRecherche.Provider>
      </AuthContext.Provider>
    </Router>
  );
}
