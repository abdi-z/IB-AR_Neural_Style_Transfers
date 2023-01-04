import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
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
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
