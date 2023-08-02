import React, { useState, useEffect } from "react";
import { RecipeCard } from "./RecipeCard";

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
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&maxReadyTime=30&number=12`
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
      <RecipeCard key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
    );
  });

  return <div className="card">{recipes}</div>;
}
