import React, { useState, useEffect } from "react";
import { Divider } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Cuisines } from "../components/Cuisines";
import { useParams } from "react-router-dom";
import { RecipeCard } from "../components/RecipeCard";
import { motion } from "framer-motion";

export function QuickEasyMeals() {
  const [mealType, setMealType] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  let parameter = useParams();

  const getMealType = async (type) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=41&type=${type}&tags=${type}&addRecipeInformation=true&instructionsRequired=true&sort=popularity&sortDirection=desc&maxReadyTime=30`
    );
    const data = await api.json();
    setMealType(data.results);
    console.log(data);
  };

  const deleteRecipe = (recipe) => {
    const key = `recipe_${recipe.id}`;
    localStorage.removeItem(key);
    const newFavorites = favoriteRecipes.filter((fav) => fav.id !== recipe.id);
    setFavoriteRecipes(newFavorites);
  };

  useEffect(() => {
    getMealType(parameter.type);
  }, [parameter.type]);

  const filteredMealType = mealType.filter((recipe) => recipe.id !== 715419);

  const recipes = filteredMealType.map((recipe) => {
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
      <h1 className="sectionTitles">Quick {capitalString} Recipes</h1>
      <div className="card">{recipes}</div>
    </motion.div>
  );
}
