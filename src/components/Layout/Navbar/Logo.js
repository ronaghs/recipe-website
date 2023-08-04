import React from "react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <header className="logo">
      <Link to={"/"}>
        <h1> CulinaryQuest</h1>
      </Link>
    </header>
  );
}

export default Logo;
