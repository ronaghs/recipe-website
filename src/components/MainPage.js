import React from "react";
import { Cusines } from "./Cusines";
import { Navbar } from "./Navbar";
import { DividerCard } from "./DividerCard";
import { Popular } from "./Popular";
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
    </div>
  );
}
