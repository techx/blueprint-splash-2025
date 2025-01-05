import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "/images/logo.png";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import Tracks from "./components/sections/Tracks";
import Faq from "./components/sections/FAQ";
import Photos from "./components/sections/Photos";
import Schedule from "./components/sections/Schedule";
import Home from "./components/sections/Home";

function Countdown({ to }: { to: Date }) {
  const [[days, hours, minutes, seconds], setCountdown] = useState([
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      if (now > to) {
        setCountdown(["0", "0", "0", "0"]);
      } else {
        let differenceInMillis = to.getTime() - now.getTime();

        const days = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
        differenceInMillis -= days * (1000 * 60 * 60 * 24);

        const hours = Math.floor(differenceInMillis / (1000 * 60 * 60));
        differenceInMillis -= hours * (1000 * 60 * 60);

        const minutes = Math.floor(differenceInMillis / (1000 * 60));
        differenceInMillis -= minutes * (1000 * 60);

        const seconds = Math.floor(differenceInMillis / 1000);

        setCountdown([days + "", hours + "", minutes + "", seconds + ""]);
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [to]);

  return (
    <div className="flex flex-col items-end">
      <div>Applications due in</div>
      <div>
        {days}d {hours}h {minutes}m {seconds}s
      </div>
    </div>
  );
}

function DesktopLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden justify-between relative">
      <div className="flex flex-col justify-start">
        <div className="fixed top-4 w-full px-8 flex justify-between items-center z-30">
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
            className="bg-magenta text-light-pink px-4 py-2 rounded-lg font-medium text-4xl hover:opacity-80 transition-opacity"
          >
            Apply
          </a>
        </div>
        <div className="fixed top-28 w-full flex items-center justify-between text-magenta font-medium text-xl px-8 z-30">
          <div>3.1 - 3.2 2025</div>
          <Countdown to={new Date("February 3, 2025 11:59:59 EST")} />
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

      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default DesktopLayout;
