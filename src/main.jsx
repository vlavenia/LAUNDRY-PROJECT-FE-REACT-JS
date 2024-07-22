import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <NextUIProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NextUIProvider>
  </ChakraProvider>
);
