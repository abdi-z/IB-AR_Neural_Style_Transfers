import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import AllArtworks from "./components/Artwork/AllArtworks/AllArtworks";
import Preface from "./components/Artwork/CreateArtwork/Preface/Preface";
import Navbar from "./components/Essentials/Navbar/Navbar";
import Footer from "./components/Essentials/Footer/Footer";
import "../src/index.css";
import Login from "./components/Authentication/Login/Login";
import Signup from "./components/Authentication/Signup/Signup";
import Home from "./components/Essentials/Home/Home";
import Step1 from "./components/Artwork/CreateArtwork/Step1/Step1";
import Step2 from "./components/Artwork/CreateArtwork/Step2/Step2";
import Step3 from "./components/Artwork/CreateArtwork/Step3/Step3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allartworks" element={<AllArtworks />} />
          <Route path="/createartwork" element={<Preface />} />
          <Route path="/createartwork/step1" element={<Step1 />} />
          <Route path="/createartwork/step2" element={<Step2 />} />
          <Route path="/createartwork/step3" element={<Step3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
