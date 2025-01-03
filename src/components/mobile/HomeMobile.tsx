import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../Final_model_2.jsx";

const HomeMobile: React.FC = () => {
  return (
    <div className="h-[360px] pb-4">
      <Canvas
        shadows
        camera={{ position: [10, 5, 10], fov: 20 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <group position={[0, -1.2, 0]}>
          <Model scale={0.5} />
        </group>
        <OrbitControls minDistance={10} maxDistance={24} />
      </Canvas>
    </div>
  );
};

export default HomeMobile;
