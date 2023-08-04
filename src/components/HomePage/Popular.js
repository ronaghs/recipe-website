import React, { useState, useEffect } from "react";
import "../../styles.css";
import { RecipeCard } from "../Common/RecipeCard";

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
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=81&type=dinner&tags=dinner&addRecipeInformation=true&instructionsRequired=true&sort=popularity&sortDirection=desc`
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
      <RecipeCard key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
    );
  });

  return <div className="card">{recipes}</div>;
}
