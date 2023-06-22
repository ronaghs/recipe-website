import { ChakraProvider } from "@chakra-ui/react";

import { MainPage } from "./components/MainPage";

import { CuisineFilters } from "./Recipes/CuisineFilters";
import { Meals } from "./Recipes/Meals";
import { Diets } from "./Recipes/Diets";
import { FitMeals } from "./Recipes/FitMeals";
import { OnePot } from "./Recipes/OnePot";
import { QuickEasyMeals } from "./Recipes/QuickEasyMeals";
import { SearchedResults } from "./Recipes/SearchedResults";
import { Recipes } from "./Recipes/Recipes";
import { Cocktails } from "./Recipes/Cocktails";
import { Favorite } from "./components/Favorite";

import { Route, Routes } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <ChakraProvider>
      <Routes>
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
    </ChakraProvider>
  );
}

export default App;
