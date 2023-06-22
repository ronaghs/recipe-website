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
import "../styles.css";
import { PlusIcon } from "./FavoriteButton";

export function Popular() {
  const [popular, setPopular] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const checkLocalStorage = localStorage.getItem("popular");

    if (checkLocalStorage) {
      setPopular(JSON.parse(checkLocalStorage));
    } else {
      const api = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=3f2468bd4a0f4a3b8cfaf0c08f873c3c&number=81&type=dinner&tags=dinner&addRecipeInformation=true&instructionsRequired=true&sort=popularity&sortDirection=desc"
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.results));
      setPopular(data.results);
    }
  };

  const deleteRecipe = (recipe) => {
    const key = `recipe_${recipe.id}`;
    localStorage.removeItem(key);
    const newFavorites = favoriteRecipes.filter((fav) => fav.id !== recipe.id);
    setFavoriteRecipes(newFavorites);
  };

  const filteredPopular = popular.filter((recipe) => recipe.id !== 715419);

  const recipes = filteredPopular.map((recipe) => {
    return (
      <Card key={recipe.id} className="chakrauiCard" maxW="20rem">
        <PlusIcon recipe={recipe} deleteRecipe={deleteRecipe} />
        <CardBody>
          <Link to={"/recipe/" + recipe.id}>
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

  return <div className="card">{recipes}</div>;
}
