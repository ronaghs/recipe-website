import React from "react";
import { MainPage } from "../HomePage/MainPage";
import { CuisineFilters } from "../RecipePages/CuisineFilters";
import { Meals } from "../RecipePages/Meals";
import { Diets } from "../RecipePages/Diets";
import { FitMeals } from "../RecipePages/FitMeals";
import { OnePot } from "../RecipePages/OnePot";
import { QuickEasyMeals } from "../RecipePages/QuickEasyMeals";
import { SearchedResults } from "../RecipePages/SearchedResults";
import { Recipes } from "../RecipePages/Recipes";
import { Cocktails } from "../RecipePages/Cocktails";
import { Favorite } from "../RecipePages/Favorite";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/meal/:type" element={<Meals />} />
        <Route path="/quick&easy/:type" element={<QuickEasyMeals />} />
        <Route path="/onepot/:type" element={<OnePot />} />
        <Route path="/dietarybased/:type" element={<Diets />} />
        <Route path="/health&fitness/:type" element={<FitMeals />} />
        <Route path="/cuisine/:type" element={<CuisineFilters />} />
        <Route path="/search/:search" element={<SearchedResults />} />
        <Route path="/recipe/:id" element={<Recipes />} />
        <Route path="/drink/:type" element={<Cocktails />} />
        <Route path="/favorite/:type" element={<Favorite />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
