import React, { Fragment } from "react";
import Nav from "./Nav";
import "../sass/components/_header.scss";
import airbnbImage from "./image/airbnb.png";

export default function Header() {
  return (
    <Fragment>
      <header>
        <img src={airbnbImage} alt="airbnbImage" />
        <Nav />
      </header>
    </Fragment>
  );
}
