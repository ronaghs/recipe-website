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
import { PlusIcon } from "../components/FavoriteButton";
import { AiFillLike } from "react-icons/ai";
import { Navbar } from "../components/Navbar";
import { Cusines } from "../components/Cusines";
import { useParams, Link } from "react-router-dom";

export function SearchedResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  let parameter = useParams();

  useEffect(() => {
    getSearch();
  }, []);

  const getSearch = async (query) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&number=40&addRecipeInformation=true&instructionsRequired=true&sort=popularity&sortDirection=desc`
    );
    console.log(api);
    const data = await api.json();
    setSearchResults(data.results);
  };

  const deleteRecipe = (recipe) => {
    const key = `recipe_${recipe.id}`;
    localStorage.removeItem(key);
    const newFavorites = favoriteRecipes.filter((fav) => fav.id !== recipe.id);
    setFavoriteRecipes(newFavorites);
  };

  useEffect(() => {
    getSearch(parameter.search);
    console.log(parameter.search);
  }, [parameter.search]);

  const recipes = searchResults.map((recipe) => {
    return (
      <Card key={recipe.id} className="chakrauiCard" maxW="20rem">
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

  let str = `${parameter.search}`;
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const capitalString = arr.join(" ");

  return (
    <div>
      <Navbar />
      <Cusines />
      <Divider />
      <h1 className="sectionTitles">{capitalString} Recipes</h1>
      <div className="card">{recipes}</div>
    </div>
  );
}
