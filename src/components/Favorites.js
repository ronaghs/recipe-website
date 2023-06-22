import React from "react";
// import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles.css";

function Favorites() {
  return (
    <div className="login">
      <Link to={"/Favorite/test"}>
        <Button colorScheme="red">
          <FaHeart className="userIcon" />
        </Button>
      </Link>
    </div>
  );
}

export default Favorites;
