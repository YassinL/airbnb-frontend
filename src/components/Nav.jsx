import React, { Fragment, useContext } from "react";

import { Link, withRouter } from "react-router-dom";

import "../sass/components/_header.scss";
import Search from "./Search";
import ContextRecherche from "./Context";

function Nav(props) {
  const context = useContext(ContextRecherche);

  const search = (searchValue) => {
    context.setRecherche(searchValue);
  };

  return (
    <Fragment>
      <div>
        <nav>
          <ul>
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
            <li>
              <Link className="link" to="/signup">
                Inscription
              </Link>
            </li>
            <li>
              <Link className="link signin" to="/signin">
                Connexion
              </Link>
            </li>
          </ul>
          <div className="recherche">
            <Search search={search} />
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default withRouter(Nav);
