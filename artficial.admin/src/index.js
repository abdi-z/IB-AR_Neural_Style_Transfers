import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ArtworksContextProvider } from "./context/ArtworksContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ArtworksContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ArtworksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
//index file
