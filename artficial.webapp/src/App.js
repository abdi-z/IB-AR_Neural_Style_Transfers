import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import AllArtworks from "./components/Artwork/AllArtworks/AllArtworks";
import Preface from "./components/Artwork/CreateArtwork/Preface/Preface";
import Navbar from "./components/Essentials/Navbar/Navbar";
import "../src/index.css";
import Login from "./components/Authentication/Login/Login";
import Signup from "./components/Authentication/Signup/Signup";
import Home from "./components/Essentials/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allartworks" element={<AllArtworks />} />
            <Route path="/createartwork" element={<Preface />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
