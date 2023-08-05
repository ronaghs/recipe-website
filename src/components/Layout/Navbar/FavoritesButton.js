import React from "react";
import { Button } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../styles.css";

function Favorites() {
  return (
    <div className="favoritesIcon">
      <Link to="/Favorite/meals">
        <Button colorScheme="red" aria-label="View favorite recipes" size="md">
          <FaHeart className="heartIcon" />{" "}
        </Button>
      </Link>
    </div>
  );
}

export default Favorites;
