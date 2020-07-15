import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import airbnbImage from "./image/airbnb.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <div className="container-logo">
          <img src={airbnbImage} alt="airbnbImage" />
        </div>
      </Link>
      <Nav />
    </header>
  );
}
