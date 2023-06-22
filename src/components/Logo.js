import React from "react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div className="logo">
      <Link to={"/"}>
        <h1>LOGO PLACEHOLDER</h1>
      </Link> 
    </div>
  );
}

export default Logo;
