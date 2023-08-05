import React, { useState, useEffect } from "react";
import { Divider } from "@chakra-ui/react";
import "../../styles.css";
import { Navbar } from "../Layout/Navbar/Navbar";
import { Cuisines } from "../Layout/Cuisines";
import { RecipeCard } from "../Common/RecipeCard";
import { motion } from "framer-motion";

//Custom hooks
import { toCapitalCase } from "../../utils/toCapitalCase";
import { useFavorites } from "../../utils/useFavorites";

function Favorite() {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <Cuisines />
      <Divider />
      <h1 className="sectionTitles">Favorite Recipes</h1>
      <div className="card">{recipes}</div>;
    </motion.div>
  );
}

export default Favorite;
