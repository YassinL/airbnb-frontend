import React, { Fragment, useContext } from "react";

import { Link, withRouter } from "react-router-dom";

import Search from "./Search";
import ModalSignup from "./ModalSignup";
import ModalSignin from "./ModalSignin";
import ContextRecherche from "./Context/Context";
import airbnbImage from "./image/airbnb.png";

function Nav(props) {
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
              <ModalSignup className="link" />
            </li>
            <li className="login">
              <ModalSignin className="link" />
            </li>
          </ul>
        </nav>

        <Search search={search} />
      </div>
    </Fragment>
  );
}

export default withRouter(Nav);
