//Custom hook for managing favorite recipes. It provides functions to add and remove recipes from the favoriteRecipes state array.

import { useState } from "react";

export function useFavorites(initialFavorites = []) {
  const [favoriteRecipes, setFavoriteRecipes] = useState(initialFavorites);

  const addFavorite = (recipe) => {
    setFavoriteRecipes((prevFavorites) => [...prevFavorites, recipe]);
  };

  const removeFavorite = (recipeId) => {
    setFavoriteRecipes((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== recipeId)
    );
  };

  return { favoriteRecipes, addFavorite, removeFavorite };
}
