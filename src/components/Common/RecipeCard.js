import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { FaRegClock } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../styles.css";
import { PlusIcon } from "./FavoriteButton";

export function RecipeCard(props) {
  return (
    <Card key={props.recipe.id} className="chakrauiCard" maxW="20rem">
      <PlusIcon recipe={props.recipe} deleteRecipe={props.deleteRecipe} />
      <CardBody>
        <Link to={"/recipe/" + props.recipe.id}>
          <div className="imageContainer">
            <Image
              src={props.recipe.image}
              alt={props.recipe.title}
              borderRadius="lg"
            />
          </div>
          <Stack mt="0" spacing="1">
            <Heading className="cardTitle" size="md">
              {props.recipe.title}
            </Heading>
          </Stack>
        </Link>
      </CardBody>
      <Divider />

      <CardFooter className="cardFooter">
        <span className="prepTime">
          <FaRegClock className="clockIcon" />
          <Text fontSize="sm">
            {props.recipe.readyInMinutes < 120
              ? props.recipe.readyInMinutes
              : Math.round(props.recipe.readyInMinutes / 60)}{" "}
            {props.recipe.readyInMinutes < 120 ? "minutes" : "hours"}
          </Text>
        </span>
        <span className="rating">
          <AiFillLike className="starIcon" /> {props.recipe.aggregateLikes}
        </span>
      </CardFooter>
    </Card>
  );
}
