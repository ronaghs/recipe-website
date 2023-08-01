import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="cyan"
        onClick={onOpen}
        aria-label="Menu"
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Menu>
            <MenuButton
              colorScheme="cyan"
              className="menuButton"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Recipes
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
              colorScheme="cyan"
              className="menuButton"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Quick & Easy
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
              colorScheme="cyan"
              className="menuButton"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              One Pot Meals
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
              colorScheme="cyan"
              className="menuButton"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Dietary-Based
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
              colorScheme="cyan"
              className="menuButton"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Health & Fitness
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
        </DrawerContent>
      </Drawer>
    </>
  );
}
