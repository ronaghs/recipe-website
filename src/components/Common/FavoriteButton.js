import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa";

import { useToast } from "@chakra-ui/react";

export function PlusIcon({ recipe }) {
  const [isSaved, setIsSaved] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const savedRecipe = localStorage.getItem(`recipe_${recipe.id}`);
    setIsSaved(savedRecipe !== null);
  }, [recipe]);

  const handleSave = () => {
    const key = `recipe_${recipe.id}`;
    if (isSaved) {
      localStorage.removeItem(key);
      setIsSaved(false);
      toast({
        title: "Removed From Favorites",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } else {
      localStorage.setItem(key, JSON.stringify(recipe));
      setIsSaved(true);
      toast({
        title: "Added to Favorites",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  return (
    <div className="plusIconWrapper" onClick={handleSave}>
      {isSaved ? (
        <FaTrashAlt
          className="plusIcon checkmark"
          title="Remove from favorites"
          aria-label="Remove from favorites"
        />
      ) : (
        <FaPlusCircle
          className="plusIcon plus"
          title="Add to favorites"
          aria-label="Add to favorites"
        />
      )}
    </div>
  );
}
