import About from "./components/sections/About";
import FAQ from "./components/sections/FAQ";
import Schedule from "./components/sections/Schedule";
import Tracks2 from "./components/sections/Tracks";
import Footer from "./components/sections/Footer";
import Navbar from "./components/Navbar";
import Photos from "./components/sections/Photos";
function App() {
  return (
    <>
      <Navbar />
      <About />
      <Tracks2 />
      <Schedule />
      <FAQ />
      <Photos />
      <Footer />
    </>
  );
}

export default App;
