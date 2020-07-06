import React from "react";
import Nav from "./Nav";
import "../sass/components/_header.scss";

export default function Header() {
  return (
    <div>
      <h2 className="header-title">HEADER</h2>
      <Nav />
    </div>
  );
}
