import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { SearchBar } from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

export function SearchModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const searchHandler = () => {
    if (userInput.trim() !== "") {
      navigate("/search/" + userInput);
      console.log("Search performed");
      onClose();
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className="searchModal">
      <Button onClick={onOpen}>
        <SearchIcon aria-label="Search for a recipe" />
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Find Recipes</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <SearchBar
                onChange={handleInputChange}
                value={userInput}
                onKeyPress={handleKeyPress}
                ref={initialRef} // Add ref prop to focus the input
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button backgroundColor="limegreen" mr={3} onClick={searchHandler}>
              Go
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
