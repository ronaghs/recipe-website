import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Cusines } from "../components/Cusines";
import { useParams } from "react-router-dom";
import { Divider, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import "../styles.css";
import { ListItem, List, Checkbox, Stack } from "@chakra-ui/react";

export function Recipes() {
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState("Recipe");
  const [nutritionImage, setNutritionImage] = useState(null);
  let parameter = useParams();

  const getRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${parameter.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    console.log(api);
    const data = await api.json();
    setRecipe(data);
  };

  const getNutrition = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${parameter.id}/nutritionWidget.png?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const blob = await api.blob();
    const imageUrl = URL.createObjectURL(blob);
    setNutritionImage(imageUrl);
  };

  useEffect(() => {
    getRecipe();
  }, [parameter.id]);

  useEffect(() => {
    getNutrition();
  }, [parameter.id]);

  return (
    <>
      <header>
        <Navbar />
        <Cusines />
      </header>
      <Divider />

      <h1 className="sectionTitles">{recipe.title}</h1>
      <nav className="recipeButtonContainer">
        <Button
          onClick={() => setActive("Recipe")}
          className={active === "Recipe" ? "activeButton" : ""}
          variant="outline"
        >
          Recipe
        </Button>
        <Button
          onClick={() => setActive("Ingredients")}
          className={active === "Ingredients" ? "activeButton" : ""}
          variant="outline"
        >
          Ingredients
        </Button>
        <Button
          onClick={() => setActive("Nutrition")}
          className={active === "Nutrition" ? "activeButton" : ""}
          variant="outline"
        >
          Nutrition
        </Button>
      </nav>
      <section className="instructionsContainer">
        <Image
          className="recipeImage"
          borderRadius="md"
          src={recipe.image}
          alt={recipe.title}
        />
        <div className="detailsContainer">
          {active === "Recipe" && (
            <>
              <div
                dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              ></div>
            </>
          )}
          {active === "Ingredients" && (
            <>
              <List className="ing">
                <Stack spacing={0} direction="column">
                  {recipe.extendedIngredients.map((ingredient) => (
                    <Checkbox colorScheme="green" key={ingredient.id}>
                      <ListItem>{ingredient.original}</ListItem>
                    </Checkbox>
                  ))}
                </Stack>
              </List>
            </>
          )}
          {active === "Nutrition" && (
            <>
              <Image src={nutritionImage} alt="Nutrition Facts" />
            </>
          )}
        </div>
      </section>
    </>
  );
}
