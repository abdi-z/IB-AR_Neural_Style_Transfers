import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

import Navbar from "./components/Essentials/Navbar/Navbar";
import Footer from "./components/Essentials/Footer/Footer";
import "../src/index.css";

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
