import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { Box, Flex } from "@chakra-ui/react";

import Artworks from "./pages/Artworks";
import Navbar from "./components/Navbar";
import "../src/index.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Galleries from "./pages/Galleries";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Flex>
          <Sidebar />
          <Box flex="1" mx="5rem">
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
                path="/artworks"
                element={user ? <Artworks /> : <Navigate to="/login" />}
              />
              <Route
                path="/users"
                element={user ? <Users /> : <Navigate to="/login" />}
              />
              <Route
                path="/galleries"
                element={user ? <Galleries /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
            </Routes>
          </Box>
        </Flex>
      </BrowserRouter>
    </div>
  );
}

export default App;
