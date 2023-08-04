import React, { useState, useEffect } from "react";
import { Divider } from "@chakra-ui/react";
import { Navbar } from "../Layout/Navbar/Navbar";
import { Cuisines } from "../Layout/Cuisines";
import { useParams } from "react-router-dom";
import { RecipeCard } from "../Common/RecipeCard";
import { motion } from "framer-motion";

//Custom hooks
import { toCapitalCase } from "../../utils/toCapitalCase";
import { useFavorites } from "../../utils/useFavorites";

export function Diets() {
  const [mealType, setMealType] = useState([]);

  //Destructure favoriteRecipes array, addFavorite function, and removeFavorite function from the useFavorites() hook.
  const { favoriteRecipes, addFavorite, removeFavorite } = useFavorites();

  let parameter = useParams();

  const getMealType = async (type) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=40&type=main course,side dish,appetizer,salad,snack&addRecipeInformation=true&instructionsRequired=true&sort=popularity&sortDirection=desc&diet=${type},tags=${type}`
    );
    console.log(api);
    const data = await api.json();
    setMealType(data.results);
  };

  useEffect(() => {
    getMealType(parameter.type);
    console.log(parameter.type);
  }, [parameter.type]);

  const recipes = mealType.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
        favoriteRecipes={favoriteRecipes}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />
    );
  });

  //Utility function to capitalize the first letter of the cuisine type and/or the title of each page.
  //Cuisine names/page titles are dynamically obtained using useParams.
  const capitalString = toCapitalCase(parameter.type);

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
