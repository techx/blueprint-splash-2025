import FooterMobile from "./components/mobile/FooterMobile";
import Navbar from "./components/mobile/Navbar";
import HomeMobile from "./components/mobile/HomeMobile";
import AboutMobile from "./components/mobile/AboutMobile";
import TracksMobile from "./components/mobile/TracksMobile";
import ScheduleMobile from "./components/mobile/ScheduleMobile";
import PhotosMobile from "./components/mobile/PhotosMobile";
import FaqMobile from "./components/mobile/FAQMobile";

const MobileLayout = () => {
  return (
    <>
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
