import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Define lazy-loaded components
const MainPage = lazy(() => import("../HomePage/MainPage"));
const CuisineFilters = lazy(() => import("../RecipePages/CuisineFilters"));
const Meals = lazy(() => import("../RecipePages/Meals"));
const Diets = lazy(() => import("../RecipePages/Diets"));
const FitMeals = lazy(() => import("../RecipePages/FitMeals"));
const OnePot = lazy(() => import("../RecipePages/OnePot"));
const QuickEasyMeals = lazy(() => import("../RecipePages/QuickEasyMeals"));
const SearchedResults = lazy(() => import("../RecipePages/SearchedResults"));
const Recipes = lazy(() => import("../RecipePages/Recipes"));
const Cocktails = lazy(() => import("../RecipePages/Cocktails"));
const Favorite = lazy(() => import("../RecipePages/Favorite"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
