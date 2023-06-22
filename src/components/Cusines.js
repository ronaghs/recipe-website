// Note: why is there so many divs? Bc I wanted a hover effect for only the icons of the food and when I had the cusine description and the food icon in the same span, I could not seperate the hover effect from the icon and its description. The workaround for now was to move the description outside of the span so that the span aka the icon could be a standalone element to work css. The idea behind all the extra divs wrapping each individual icon/text was so that each icon/text combo would be a pair and you could center them respectively and then display all of them in a row, this way the text and icon remained seperated elements for the css aspect, but would be displayed together with everything aligned properly...otherwise the text appeared inline with the icon.

// I know this can probably be done, but i just wanted a working demo for now, but in the future, should probably look into making an icon component. Looping through an object or something to render each respective icon rather than having like 8 of them individually hard coded like atm, but then again, these icons wont change so, but refactoring the code will be good practice to touch up the code base.

import React from "react";
import "../styles.css";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../Recipes/SearchBar";

export function Cusines() {
  return (
    <div className="foodCarousel">
      <div className="foodIcons">
        <span className="foodPics" role="img" aria-label="mexican">
          <NavLink activeClassName="activeCuisine" to={"/cuisine/mexican"}>
            🌮
          </NavLink>
        </span>
        <p>Mexican</p>
      </div>
      <div className="foodIcons">
        <span className="foodPics" role="img" aria-label="american">
          <NavLink activeClassName="activeCuisine" to={"/cuisine/american"}>
            🍟
          </NavLink>
        </span>
        <p>American</p>
      </div>
      <div className="foodIcons">
        <span className="foodPics" role="img" aria-label="chinese">
          <NavLink activeClassName="activeCuisine" to={"/cuisine/chinese"}>
            🥡
          </NavLink>
        </span>
        <p>Chinese</p>
      </div>
      <div className="foodIcons">
        <span className="foodPics" role="img" aria-label="italian">
          <NavLink activeClassName="activeCuisine" to={"/cuisine/italian"}>
            🍝
          </NavLink>
        </span>
        <p>Italian</p>
      </div>
      {/* <SearchBar /> */}
      <div className="foodIcons">
        <span className="foodPics" role="img" aria-label="sushi">
          <NavLink activeClassName="activeCuisine" to={"/cuisine/japanese"}>
            🍣
          </NavLink>
        </span>
        <p>Japanese</p>
      </div>
      <div className="foodIcons">
        <span className="foodPics" role="img" aria-label="mediterranean">
          <NavLink
            activeClassName="activeCuisine"
            to={"/cuisine/mediterranean"}
          >
            🥙
          </NavLink>
        </span>
        <p>Mediterranean</p>
      </div>
      <div className="foodIcons">
        <span className="foodPics" role="img" aria-label="indian">
          <NavLink activeClassName="activeCuisine" to={"/cuisine/indian"}>
            🍛
          </NavLink>
        </span>
        <p>Indian</p>
      </div>
      <div className="foodIcons">
        <span className="foodPics" role="img" aria-label="korean">
          <NavLink activeClassName="activeCuisine" to={"/cuisine/korean"}>
            🍜
          </NavLink>
        </span>
        <p>Korean</p>
      </div>
    </div>
  );
}
