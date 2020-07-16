import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import airbnbImage from "./image/airbnb.png";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <div className="container">
          <img src={airbnbImage} alt="airbnbImage" className='container-airbnbImg'/>
        </div>
      </Link>
      <Nav />
    </header>
  );
}
