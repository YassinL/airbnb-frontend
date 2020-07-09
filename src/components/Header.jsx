import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

import Nav from "./Nav";
import "../sass/components/_header.scss";
import airbnbImage from "./image/airbnb.png";

export default function Header() {
  return (
    <Fragment>
      <header>
        {/* <Link to="/"> */}
        <img src={airbnbImage} alt="airbnbImage" />
        {/* </Link> */}
        <Nav />
      </header>
    </Fragment>
  );
}
