import React, { useState, useEffect } from "react";
import { Divider } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Cuisines } from "../components/Cuisines";
import { useParams } from "react-router-dom";
import { RecipeCard } from "../components/RecipeCard";
import { motion } from "framer-motion";

export function Cocktails() {
  const [drinkType, setDrinkType] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  let parameter = useParams();

  const getDrinkType = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=40&type=drink,beverage&addRecipeInformation=true&instructionsRequired=true&sort=popularity&sortDirection=desc&minAlcohol=1`
    );
    console.log(api);
    const data = await api.json();
    setDrinkType(data.results);
  };

  const deleteRecipe = (recipe) => {
    const key = `recipe_${recipe.id}`;
    localStorage.removeItem(key);
    const newFavorites = favoriteRecipes.filter((fav) => fav.id !== recipe.id);
    setFavoriteRecipes(newFavorites);
  };

  useEffect(() => {
    getDrinkType(parameter.type);
    console.log(parameter.type);
  }, [parameter.type]);

  const recipes = drinkType.map((recipe) => {
    return (
      <RecipeCard key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
    );
  });

  let str = `${parameter.type}`;
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const capitalString = arr.join(" ");

  return (
    <motion.div
      className="cuisineResults"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <Cuisines />
      <Divider />
      <h1 className="sectionTitles">{capitalString} Recipes</h1>
      <div className="card">{recipes}</div>
    </motion.div>
  );
}
