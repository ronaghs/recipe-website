import React from "react";
import { Button } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../styles.css";

function Favorites() {
  return (
    <div className="login">
      <Link to={"/Favorite/meals"}>
        <Button colorScheme="red" aria-label="View favorite recipes">
          <FaHeart className="userIcon" />
        </Button>
      </Link>
    </div>
  );
}

export default Favorites;
