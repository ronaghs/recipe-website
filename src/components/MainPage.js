import React from "react";
import { Cuisines } from "./Cuisines";
import { Navbar } from "./Navbar";
import { DividerCard } from "./DividerCard";
import { Popular } from "./Popular";
import { Divider } from "@chakra-ui/react";
import { Greeting } from "./Greeting";
import { motion } from "framer-motion";

export function MainPage() {
  return (
    <motion.div
      className="mainPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <Cuisines />
      <Greeting />
      <DividerCard />
      <Divider />
      <h3 className="sectionTitles">Popular Meals</h3>
      <Popular />
    </motion.div>
  );
}
