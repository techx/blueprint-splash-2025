import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import Tracks from "./components/sections/Tracks";
import FAQ from "./components/sections/FAQ";
import Photos from "./components/sections/Photos";
import Home from "./components/sections/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden justify-between">
        <Link to="/" className="fixed top-4 left-4 z-50">
          <img
            src={logo}
            alt="HackMIT Logo"
            className="w-24 h-24 object-contain"
          />
        </Link>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
