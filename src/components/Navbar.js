import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import Favorites from "./Favorites";
import { Hamburger } from "./Hamburger";
import { useState, useEffect } from "react";
import { SearchModal } from "./SearchModal";

export function Navbar() {
  const [showDropdowns, setShowDropdowns] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowDropdowns(window.innerWidth > 1438); // Adjust the breakpoint as per your design
    };

    handleResize(); // Call handleResize initially to set the correct state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <Logo />
      <nav className="navbar">
        {showDropdowns ? (
          <>
            <Menu>
              <MenuButton
                backgroundColor="limegreen"
                className="menuButton"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                <Text className="menuButtonText" fontSize="1rem">
                  Recipes{" "}
                </Text>
              </MenuButton>
              <MenuList>
                <NavLink to={"/meal/breakfast"}>
                  <MenuItem>Breakfast</MenuItem>
                </NavLink>
                <NavLink to={"/meal/main course"}>
                  <MenuItem>Lunch or Dinner</MenuItem>
                </NavLink>
                <NavLink to={"/meal/dessert"}>
                  <MenuItem>Dessert</MenuItem>
                </NavLink>
                <NavLink to={"/meal/drink"}>
                  <MenuItem>Drinks</MenuItem>
                </NavLink>
                <NavLink to={"/meal/appetizer"}>
                  <MenuItem>Snacks & Appetizers</MenuItem>
                </NavLink>
              </MenuList>
            </Menu>{" "}
            <Menu>
              <MenuButton
                backgroundColor="limegreen"
                className="menuButton"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                <Text className="menuButtonText" fontSize="1rem">
                  Quick & Easy{" "}
                </Text>
              </MenuButton>
              <MenuList>
                <NavLink to={"/quick&easy/main course"}>
                  <MenuItem>Quick Meals</MenuItem>
                </NavLink>
                <NavLink to={"/quick&easy/snack"}>
                  <MenuItem>On The Go</MenuItem>
                </NavLink>
              </MenuList>
            </Menu>{" "}
            <Menu>
              <MenuButton
                backgroundColor="limegreen"
                className="menuButton"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                <Text className="menuButtonText" fontSize="1rem">
                  One Pot Meals{" "}
                </Text>
              </MenuButton>
              <MenuList>
                <NavLink to={"/onepot/slow cooker"}>
                  <MenuItem> Crock pot</MenuItem>
                </NavLink>
                <NavLink to={"/onepot/dutch oven"}>
                  <MenuItem> Dutch Oven</MenuItem>
                </NavLink>
              </MenuList>
            </Menu>{" "}
            <Menu>
              <MenuButton
                backgroundColor="limegreen"
                className="menuButton"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                <Text className="menuButtonText" fontSize="1rem">
                  Dietary-Based{" "}
                </Text>
              </MenuButton>
              <MenuList>
                <NavLink to={"/dietarybased/vegan"}>
                  <MenuItem> Vegan</MenuItem>
                </NavLink>
                <NavLink to={"/dietarybased/vegetarian"}>
                  <MenuItem> Vegetarian</MenuItem>
                </NavLink>
                <NavLink to={"/dietarybased/pescetarian"}>
                  <MenuItem> Pescetarian</MenuItem>
                </NavLink>
                <NavLink to={"/dietarybased/ketogenic"}>
                  <MenuItem> Ketogenic</MenuItem>
                </NavLink>
                <NavLink to={"/dietarybased/paleo"}>
                  <MenuItem> Paleo</MenuItem>
                </NavLink>
                <NavLink to={"/dietarybased/gluten free"}>
                  <MenuItem> Gluten Free</MenuItem>
                </NavLink>
              </MenuList>
            </Menu>{" "}
            <Menu>
              <MenuButton
                backgroundColor="limegreen"
                className="menuButton"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                <Text className="menuButtonText" fontSize="1rem">
                  Health & Fitness{" "}
                </Text>
              </MenuButton>
              <MenuList>
                <NavLink to={"/health&fitness/main course"}>
                  <MenuItem> Meals</MenuItem>
                </NavLink>
                <NavLink to={"/health&fitness/salad"}>
                  <MenuItem> Salads</MenuItem>
                </NavLink>{" "}
                <NavLink to={"/health&fitness/drink"}>
                  <MenuItem> Drinks</MenuItem>
                </NavLink>{" "}
              </MenuList>
            </Menu>
          </>
        ) : (
          <Hamburger />
        )}
      </nav>
      <SearchModal />
      <Favorites />
    </header>
  );
}
