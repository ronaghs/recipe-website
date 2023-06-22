import React from "react";
import { Input, Stack, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

export function SearchBar({ onChange, value, onKeyPress }) {
  return (
    <div className="searchBar">
      <Stack spacing={4}>
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            onKeyPress={onKeyPress}
            onChange={onChange}
            value={value}
            type="search"
            placeholder="Search..."
            autoFocus // Add autoFocus prop to automatically focus the input
          />
        </InputGroup>
      </Stack>
    </div>
  );
}
