import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { FaRegClock } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PlusIcon } from "./FavoriteButton";

export function AllRecipes() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes();
  }, []);
  //if you want the page sections to refresh, then comment out const checklocalstorage and if block and just the else portion...not the block. mind the curly brace after else and below setallrecipes
  const getAllRecipes = async () => {
    const checkLocalStorage = localStorage.getItem("allRecipes");

    if (checkLocalStorage) {
      setAllRecipes(JSON.parse(checkLocalStorage));
    } else {
      const api = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=3f2468bd4a0f4a3b8cfaf0c08f873c3c&number=24&tags=main course"
      );
      const data = await api.json();
      localStorage.setItem("allRecipes", JSON.stringify(data.recipes));
      setAllRecipes(data.recipes);
    }
  };

  const deleteRecipe = (recipe) => {
    const key = `recipe_${recipe.id}`;
    localStorage.removeItem(key);
    const newFavorites = favoriteRecipes.filter((fav) => fav.id !== recipe.id);
    setFavoriteRecipes(newFavorites);
  };

  const recipes = allRecipes.map((recipe) => {
    return (
      <Card className="chakrauiCard" maxW="20rem">
        <PlusIcon recipe={recipe} deleteRecipe={deleteRecipe} />
        <CardBody>
          <Link to={"/recipe/" + recipe.id}>
            <div className="imageContainer">
              <Image src={recipe.image} alt={recipe.title} borderRadius="lg" />
            </div>
            <Stack mt="0" spacing="1">
              <Heading size="md">{recipe.title}</Heading>
            </Stack>
          </Link>
        </CardBody>
        <Divider />
        <CardFooter className="cardFooter">
          <span className="prepTime">
            <FaRegClock className="clockIcon" />
            <Text fontSize="sm">
              {recipe.readyInMinutes < 120
                ? recipe.readyInMinutes
                : Math.round(recipe.readyInMinutes / 60)}{" "}
              {recipe.readyInMinutes < 120 ? "minutes" : "hours"}
            </Text>
          </span>
          <span className="rating">
            <AiFillLike className="starIcon" /> {recipe.aggregateLikes}
          </span>
        </CardFooter>
      </Card>
    );
  });

  return <div className="card">{recipes}</div>;
}
