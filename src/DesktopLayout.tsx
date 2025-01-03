import { Routes, Route, Link } from "react-router-dom";
import logo from "/images/logo.png";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import Tracks from "./components/sections/Tracks";
import Faq from "./components/sections/FAQ";
import Photos from "./components/sections/Photos";
import Schedule from "./components/sections/Schedule";
import Home from "./components/sections/Home";

function DesktopLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden justify-between relative">
      <div className="fixed top-4 w-full pl-4 pr-12 flex justify-between items-center z-50">
        <Link to="/">
          <img
            src={logo}
            alt="HackMIT Logo"
            className="w-24 h-24 object-contain"
          />
        </Link>
        <a
          href="https://plume.hackmit.org"
          target="_blank"
          className="bg-magenta text-light-pink px-4 py-2 rounded-lg font-medium text-xl hover:opacity-90 transition-opacity"
        >
          Apply
        </a>
      </div>

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>

      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default DesktopLayout;
