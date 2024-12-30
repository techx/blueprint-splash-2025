import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { Model } from "../FINAL_ROOM.jsx";
import { Model } from "../Final_2.jsx";
import { Enhanced_Final } from "../Enhanced_Final.jsx";

const Home: React.FC = () => {
  // const [scale, setScale] = useState(0.6);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScale(window.innerWidth < 640 ? 0.4 : 0.6);
  //   };

  //   handleResize(); // Set initial scale
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // return (
  //   <div className="flex-grow flex h-[100vh]">
  //     <Canvas
  //       shadows
  //       camera={{ position: [10, 5, 10], fov: 25 }}
  //       className="w-full h-full"
  //     >
  //       <ambientLight intensity={0.8} />
  //       <group position={[0, -1.2, 0]}>
  //         {/* <Model scale={scale} /> */}
  //         <Enhanced_Final />
  //       </group>
  //       <OrbitControls minDistance={10} maxDistance={24} />
  //     </Canvas>
  //   </div>
  // );
  return (
    <nav className="space-x-4">
      <Link to="/about" className="text-blue-600 hover:underline">
        About
      </Link>
      <Link to="/tracks" className="text-blue-600 hover:underline">
        Tracks
      </Link>
      <Link to="/faq" className="text-blue-600 hover:underline">
        FAQ
      </Link>
      <Link to="/photos" className="text-blue-600 hover:underline">
        Photos
      </Link>
      <Link to="/schedule" className="text-blue-600 hover:underline">
        Schedule
      </Link>
    </nav>
  );
};

export default Home;
