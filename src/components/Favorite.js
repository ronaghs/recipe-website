import React, { useState, useEffect } from "react";
import { Divider } from "@chakra-ui/react";

import "../styles.css";
import { Navbar } from "./Navbar";
import { Cusines } from "./Cusines";
import { RecipeCard } from "../components/RecipeCard";

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
      <RecipeCard key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
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
