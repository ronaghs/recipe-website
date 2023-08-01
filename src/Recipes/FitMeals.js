import React, { useState, useEffect } from "react";
import { Divider } from "@chakra-ui/react";

import { Navbar } from "../components/Navbar";
import { Cusines } from "../components/Cusines";
import { useParams } from "react-router-dom";
import { RecipeCard } from "../components/RecipeCard";

export function FitMeals() {
  const [mealType, setMealType] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  let parameter = useParams();

  async function getMealType(type) {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&minProtein=25&type=${type}&number=40&addRecipeInformation=true&instructionsRequired=true&sort=popularity&sortDirection=desc`
    );
    const data = await api.json();
    setMealType(data.results);
  }

  const deleteRecipe = (recipe) => {
    const key = `recipe_${recipe.id}`;
    localStorage.removeItem(key);
    const newFavorites = favoriteRecipes.filter((fav) => fav.id !== recipe.id);
    setFavoriteRecipes(newFavorites);
  };

  useEffect(() => {
    getMealType(parameter.type);
    console.log(parameter.type);
  }, [parameter.type]);

  const recipes = mealType.map((recipe) => {
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
    <div>
      <Navbar />
      <Cusines />
      <Divider />
      <h1 className="sectionTitles">High Protein {capitalString} Recipes</h1>
      <div className="card">{recipes}</div>
    </div>
  );
}
