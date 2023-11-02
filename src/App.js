import { ChakraProvider } from "@chakra-ui/react";
import AnimatedRoutes from "./components/routes/AnimatedRoutes";
import "./styles.css";
import Footer from "./components/Layout/Footer";
import { Navbar } from "./components/Layout/Navbar/Navbar";
import { Cuisines } from "./components/Layout/Cuisines";

function App() {
  return (
    <ChakraProvider>
      {/* <Navbar />
      <Cuisines /> */}
      <AnimatedRoutes />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
