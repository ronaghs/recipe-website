import React from "react";
import "../../styles.css";
import { NavLink } from "react-router-dom";

export function Cuisines() {
  return (
    <div className="foodCarousel">
      <div className="foodIcons">
        <nav className="foodPics">
          <NavLink
            activeClassName="activeCuisine"
            aria-label="Mexican recipes"
            to={"/cuisine/mexican"}
          >
            🌮
          </NavLink>
        </nav>
        <p>Mexican</p>
      </div>
      <div className="foodIcons">
        <nav className="foodPics">
          <NavLink
            activeClassName="activeCuisine"
            aria-label="American recipes"
            to={"/cuisine/american"}
          >
            🍟
          </NavLink>
        </nav>
        <p>American</p>
      </div>
      <div className="foodIcons">
        <nav className="foodPics">
          <NavLink
            activeClassName="activeCuisine"
            aria-label="Chinese recipes"
            to={"/cuisine/chinese"}
          >
            🥡
          </NavLink>
        </nav>
        <p>Chinese</p>
      </div>
      <div className="foodIcons">
        <nav className="foodPics">
          <NavLink
            activeClassName="activeCuisine"
            aria-label="Italian recipes"
            to={"/cuisine/italian"}
          >
            🍝
          </NavLink>
        </nav>
        <p>Italian</p>
      </div>
      <div className="foodIcons">
        <nav className="foodPics">
          <NavLink
            activeClassName="activeCuisine"
            aria-label="Japanese recipes"
            to={"/cuisine/japanese"}
          >
            🍣
          </NavLink>
        </nav>
        <p>Japanese</p>
      </div>
      <div className="foodIcons">
        <nav className="foodPics">
          <NavLink
            aria-label="Mediterranean recipes"
            activeClassName="activeCuisine"
            to={"/cuisine/mediterranean"}
          >
            🥙
          </NavLink>
        </nav>
        <p>Mediterranean</p>
      </div>
      <div className="foodIcons">
        <nav className="foodPics">
          <NavLink
            activeClassName="activeCuisine"
            aria-label="Indian recipes"
            to={"/cuisine/indian"}
          >
            🍛
          </NavLink>
        </nav>
        <p>Indian</p>
      </div>
      <div className="foodIcons">
        <nav className="foodPics">
          <NavLink
            activeClassName="activeCuisine"
            aria-label="Korean recipes"
            to={"/cuisine/korean"}
          >
            🍜
          </NavLink>
        </nav>
        <p>Korean</p>
      </div>
    </div>
  );
}
