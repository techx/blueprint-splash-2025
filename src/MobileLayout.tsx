import AboutMobile from "./components/mobile/AboutMobile";
import FaqMobile from "./components/mobile/FAQMobile";
import FooterMobile from "./components/mobile/FooterMobile";
import HomeMobile from "./components/mobile/HomeMobile";
import Navbar from "./components/mobile/Navbar";
import PhotosMobile from "./components/mobile/PhotosMobile";
import ScheduleMobile from "./components/mobile/ScheduleMobile";
import TracksMobile from "./components/mobile/TracksMobile";

const MobileLayout = () => {
  return (
    <>
      <div
        className={
          "w-full flex justify-center bg-magenta text-light-pink text-xl " +
          "py-2 px-3 rounded-bl-md rounded-br-md"
        }
      >
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
      <Navbar />
      <HomeMobile />
      <AboutMobile />
      <TracksMobile />
      <ScheduleMobile />
      <PhotosMobile />
      <FaqMobile />
      <FooterMobile />
    </>
  );
};

export default MobileLayout;
