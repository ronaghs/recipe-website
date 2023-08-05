import React, { useState, useEffect } from "react";
import { RecipeCard } from "../Common/RecipeCard";

//Custom hooks
import { toCapitalCase } from "../../utils/toCapitalCase";
import { useFavorites } from "../../utils/useFavorites";

function EasyMeals() {
  const [easyMeals, setEasyMeals] = useState([]);

  //Destructure favoriteRecipes array, addFavorite function, and removeFavorite function from the useFavorites() hook.
  const { favoriteRecipes, addFavorite, removeFavorite } = useFavorites();

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

  const recipes = easyMeals.map((recipe) => {
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

  return <div className="card">{recipes}</div>;
}

export default EasyMeals;
