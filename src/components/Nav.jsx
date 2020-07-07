import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../sass/components/_header.scss";

export default function Nav() {
  return (
    <Fragment>
      <div>
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/places">
                Places
              </Link>
            </li>
            <li>
              <Link className="link" to="/signup">
                Signup
              </Link>
            </li>
            <li>
              <Link className="link signin" to="/signin">
                Signin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
