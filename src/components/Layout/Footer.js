import React from "react";
import { Text } from "@chakra-ui/react";

function Footer() {
  return (
    <div className="footer">
      <Text> © {new Date().getFullYear()} CulinaryQuest</Text>
    </div>
  );
}

export default Footer;
