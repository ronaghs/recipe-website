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
import { FaRegClock, FaPlusCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles.css";
import { Navbar } from "./Navbar";
import { Cusines } from "./Cusines";
import { PlusIcon } from "./FavoriteButton";

export function Favorite() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const recipeKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("recipe_")
    );

    const recipes = recipeKeys.map((key) =>
      JSON.parse(localStorage.getItem(key))
    );

    setFavoriteRecipes(recipes);
  }, []);

  const saveRecipe = (recipe) => {
    localStorage.setItem(`recipe_${recipe.id}`, JSON.stringify(recipe));
    setFavoriteRecipes([...favoriteRecipes, recipe]);
  };

  const deleteRecipe = (recipe) => {
    const key = `recipe_${recipe.id}`;
    localStorage.removeItem(key);
    const newFavorites = favoriteRecipes.filter((fav) => fav.id !== recipe.id);
    setFavoriteRecipes(newFavorites);
  };

  const recipes = favoriteRecipes.map((recipe) => {
    return (
      <Card key={recipe.id} className="chakrauiCard" maxW="20rem">
        <PlusIcon recipe={recipe} deleteRecipe={deleteRecipe} />
        <CardBody>
          <Link to={`/recipe/${recipe.id}`}>
            <div className="imageContainer">
              <Image src={recipe.image} alt={recipe.title} borderRadius="lg" />
            </div>
            <Stack mt="0" spacing="1">
              <Heading className="cardTitle" size="md">
                {recipe.title}
              </Heading>
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

  return (
    <div>
      <Navbar />
      <Cusines />
      <Divider />
      <h1 className="sectionTitles">Favorite Recipes</h1>
      <div className="card">{recipes}</div>;
    </div>
  );
}
