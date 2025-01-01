import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import Tracks from "./components/sections/Tracks";
import FAQ from "./components/sections/FAQ";
import Photos from "./components/sections/Photos";
import Schedule from "./components/sections/Schedule";
import Home from "./components/sections/Home";
import Schedule from "./components/sections/Schedule";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen overflow-hidden justify-between relative">
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
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </div>

        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
