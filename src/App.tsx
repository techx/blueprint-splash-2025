import { BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return <Router>{isMobile ? <MobileLayout /> : <DesktopLayout />}</Router>;
}

export default App;
