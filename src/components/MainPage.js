import React from "react";
import { Cusines } from "./Cusines";
import { Navbar } from "./Navbar";
import { DividerCard } from "./DividerCard";
import { Popular } from "./Popular";
import { EasyMeals } from "./EasyMeals";
import { AllRecipes } from "./AllRecipes";
import { Divider } from "@chakra-ui/react";

export function MainPage() {
  return (
    <div>
      <Navbar />
      <Cusines />
      <DividerCard />
      <Divider />
      <h1 className="sectionTitles">Popular Meals</h1>
      <Popular />
      {/* These "random" api calls are problematic bc a lot of them have bad data and make for an unpleasant expierence, so opting to (for now) beef up the popular meals section and comment the easymeals and try something new portions out */}
      {/* <Divider />
      <h1 className="sectionTitles">Easy Weeknight Meals</h1>
      <EasyMeals /> */}
      {/* <Divider />
      <h1 className="sectionTitles">Try Something New</h1>
      <AllRecipes /> */}
    </div>
  );
}
