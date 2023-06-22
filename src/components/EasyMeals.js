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
import { PlusIcon } from "./FavoriteButton";
import { Link } from "react-router-dom";

export function EasyMeals() {
  const [easyMeals, setEasyMeals] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    getEasyMeals();
  }, []);

  const getEasyMeals = async () => {
    const checkLocalStorage = localStorage.getItem("easyMeals");

    if (checkLocalStorage) {
      setEasyMeals(JSON.parse(checkLocalStorage));
    } else {
      const api = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=3f2468bd4a0f4a3b8cfaf0c08f873c3c&maxReadyTime=30&number=12"
      );
      const data = await api.json();
      localStorage.setItem("easyMeals", JSON.stringify(data.recipes));
      setEasyMeals(data.recipes);
      console.log(data);
    }
  };
  const deleteRecipe = (recipe) => {
    const key = `recipe_${recipe.id}`;
    localStorage.removeItem(key);
    const newFavorites = favoriteRecipes.filter((fav) => fav.id !== recipe.id);
    setFavoriteRecipes(newFavorites);
  };

  const recipes = easyMeals.map((recipe) => {
    return (
      <Card className="chakrauiCard" maxW="20rem">
        <PlusIcon recipe={recipe} deleteRecipe={deleteRecipe} />
        <CardBody>
          <Link to={"/recipe/" + recipe.id}>
            <div className="imageContainer">
              <Image
                src={recipe.image}
                alt="Santa Maria Grilled Tri-Tip Beef"
                borderRadius="lg"
              />
            </div>
            <Stack mt="0" spacing="1">
              {/* <Text>Dinner</Text> */}
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
              {recipe.readyInMinutes < 120 ? "minutes" : "hours"}{" "}
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
