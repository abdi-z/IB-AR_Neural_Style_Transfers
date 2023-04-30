import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Error } from "../Essentials/Error/Error";
import AllArtworks from "../Artwork/AllArtworks/AllArtworks";
import Preface from "../Artwork/CreateArtwork/Preface/Preface";
import Navbar from "../Essentials/Navbar/Navbar";
import Footer from "../Essentials/Footer/Footer";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import Home from "../Essentials/Home/Home";
import ArtworksDetail from "../Artwork/Details/ArtworksDetail";
import Step1 from "../Artwork/CreateArtwork/Step1/Step1";
import Step2 from "../Artwork/CreateArtwork/Step2/Step2";
import Step3 from "../Artwork/CreateArtwork/Step3/Step3";
import Step4 from "../Artwork/CreateArtwork/Step4/Step4";
import Step5 from "../Artwork/CreateArtwork/Step5/Step5";
import { AnimatePresence } from "framer-motion";
import Creator from "../Creator/Creator";
import CreatorArts from "../Creator/CreatorArts";
import Profile from "../Profile/Profile";
import UpdateForm from "../Profile/UpdateForm";
import Select from "../Artwork/CreateArtwork/Select/Select";
import Galleries from "../Galleries/Galleries";

function AnimatedRoutes() {
  const location = useLocation();
  const { user } = useAuthContext();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/update" element={<UpdateForm />} />
        <Route path="/allartworks" element={<AllArtworks />} />
        <Route path="/allartworks/:id" element={<ArtworksDetail />} />
        <Route path="/creator/:id" element={<Creator />} />
        <Route path="/creator/:id/allartworks" element={<CreatorArts />} />
        <Route path="/creator/:id/galleries" element={<Galleries />} />

        <Route
          path="/createartwork"
          element={user ? <Preface /> : <Navigate to="/login" />}
        />
        <Route path="/createartwork/step1" element={<Step1 />} />
        <Route path="/createartwork/select" element={<Select />} />
        <Route path="/createartwork/step2" element={<Step2 />} />
        <Route path="/createartwork/step3" element={<Step3 />} />
        <Route path="/createartwork/step4" element={<Step4 />} />
        <Route path="/createartwork/step5" element={<Step5 />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
