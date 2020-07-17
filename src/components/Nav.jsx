import React, { Fragment, useContext } from "react";

import { Link, withRouter } from "react-router-dom";

import Search from "./Search";
import ModalSignup from "./ModalSignup";
import ModalSignin from "./ModalSignin";
import ContextRecherche from "./Context/Context";
import AuthContext from "./Context/Auth";
import airbnbImage from "./image/airbnb.png";
import { useEffect } from "react";

function Nav(props) {
  // Switch
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    return () => {};
  }, [state]);

  const SignUpIN = () => {
    return (
      <>
        <li>
          <ModalSignup className="link" />
        </li>
        <li className="login">
          <ModalSignin className="link" />
        </li>
      </>
    );
  };

  const logOut = () => {
    return dispatch({ type: "LOGOUT" });
  };

  const Profil = () => {
    return (
      <>
        <li className="link">Profil</li>
        <li className="link login" onClick={logOut}>
          Déconnexion
        </li>
      </>
    );
  };

  const ProfilIsAuth = () => {
    if (state.isAuthenticated) {
      return <Profil />;
    }
    return <SignUpIN />;
  };
  // Recherche
  const context = useContext(ContextRecherche);

  const search = (searchValue) => {
    context.setRecherche(searchValue);
  };

  return (
    <Fragment>
      <div className="navigation">
        <nav>
          <div className="navigation-container">
            <img
              src={airbnbImage}
              alt="airbnbImage"
              className="container-airbnbImg"
            />
          </div>
          <ul>
            <li>
              <Link className="link" to="/addplaces">
                Héberger des voyageurs
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/places"
                onClick={() => context.setRecherche("")}
              >
                Appartements
              </Link>
            </li>
            <ProfilIsAuth />
          </ul>
        </nav>
        <Search search={search} />
      </div>
    </Fragment>
  );
}

export default withRouter(Nav);
