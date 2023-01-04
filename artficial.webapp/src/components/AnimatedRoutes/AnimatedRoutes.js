import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

import AllArtworks from "../Artwork/AllArtworks/AllArtworks";
import Preface from "../Artwork/CreateArtwork/Preface/Preface";
import Navbar from "../Essentials/Navbar/Navbar";
import Footer from "../Essentials/Footer/Footer";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Home from "../Essentials/Home/Home";
import Step1 from "../Artwork/CreateArtwork/Step1/Step1";
import Step2 from "../Artwork/CreateArtwork/Step2/Step2";
import Step3 from "../Artwork/CreateArtwork/Step3/Step3";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/allartworks" element={<AllArtworks />} />
        <Route path="/createartwork" element={<Preface />} />
        <Route path="/createartwork/step1" element={<Step1 />} />
        <Route path="/createartwork/step2" element={<Step2 />} />
        <Route path="/createartwork/step3" element={<Step3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
