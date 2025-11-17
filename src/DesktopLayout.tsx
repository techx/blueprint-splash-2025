import { Link, Route, Routes } from "react-router-dom";
import About from "./components/sections/About";
import Faq from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import Home from "./components/sections/Home";
import Photos from "./components/sections/Photos";
import Schedule from "./components/sections/Schedule";
import Tracks from "./components/sections/Tracks";
import logo from "/images/logo.png";

function DesktopLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden justify-between relative">
      <div className="w-full flex justify-center bg-magenta text-light-pink text-xl py-2">
        <div>
          Interested in Blueprint 2026? Fill out our{" "}
          <a
            className="text-pale-yellow underline cursor-pointer"
            href="https://go.hackmit.org/bp-interest"
          >
            interest form
          </a>{" "}
          to receive updates as soon as applications open!
        </div>
      </div>
      <div className="relative flex flex-col justify-start">
        <div className="absolute w-full px-8 flex justify-between items-center z-50">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="HackMIT Logo"
                className="w-24 h-24 object-contain"
              />
            </Link>
            <div>3.1 - 3.2 2025</div>
          </div>
          <div />
        </div>
        <div></div>
      </div>

      <div className="flex-grow z-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>

      <div className="absolute bottom-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}

export default DesktopLayout;
