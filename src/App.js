import { ChakraProvider } from "@chakra-ui/react";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./styles.css";

function App() {
  return (
    <ChakraProvider>
      <AnimatedRoutes />
    </ChakraProvider>
  );
}

export default App;
