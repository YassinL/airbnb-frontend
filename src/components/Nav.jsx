import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Fragment>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/places">Places</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
