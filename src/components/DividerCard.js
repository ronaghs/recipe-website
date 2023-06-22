import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "../styles.css";

export function DividerCard() {
  const dividerData = [
    {
      heading: "The Perfect Drink",
      text: "Find the perfect drink to help you relax and unwind with your next delicious meal.",
      button: "Take a look",
      image:
        "https://thumbs.dreamstime.com/b/set-various-cocktails-black-background-set-various-cocktails-shaker-black-background-188649840.jpg",
      alt: "drinks",
      path: "/drink/cocktail",
    },
    {
      heading: "Delicious Desserts",
      text: "Enjoy a sweet treat after your meal or to satisfy that sweet tooth!",
      button: "Check it out",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRml5NcdcQTmm2Fl40TRNmxuqFftXjfTZl_2w&usqp=CAU",
      alt: "desserts",
      path: "/meal/dessert",
    },
  ];

  const [isLargerThanSmall] = useMediaQuery("(min-width: 30em)");

  if (!isLargerThanSmall) {
    return null; // Render nothing if the screen size is smaller than 30em (small screens)
  }

  return (
    <Box className="divider">
      {dividerData.map((divider) => (
        <Card
          key={divider.heading}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          maxW="42rem"
          maxH="10rem"
          display="flex"
          my="2rem"
        >
          <Image
            className="drinkImage"
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={divider.image}
            alt={divider.alt}
          />

          <Box display="flex" flexDirection="column" justifyContent="center">
            <CardBody>
              <Heading size={{ base: "sm", sm: "md" }}>
                {divider.heading}
              </Heading>

              <Text py="2">{divider.text}</Text>

              <NavLink to={divider.path}>
                <Button
                  className="drinksButton"
                  variant="outline"
                  colorScheme="black"
                  alignSelf={{ base: "center", sm: "unset" }}
                >
                  {divider.button}
                </Button>
              </NavLink>
            </CardBody>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
