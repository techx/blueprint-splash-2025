import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../Final_model_2.jsx";
import { Mesh, MeshStandardMaterial } from "three";

interface NameToLink {
  [key: string]: string;
}

const name_to_link: NameToLink = {
  about: "/about",
  faq: "/faq",
  photos: "/photos",
  schedule: "/schedule",
  tracks: "/tracks",
};

interface HoverableModelProps {
  onObjectClick: (clickedMesh: string) => void;
  scale: number;
}

const HoverableModel = ({ onObjectClick, ...props }: HoverableModelProps) => {
  const { scene, gl } = useThree();

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    const hoveredObject = e.object as Mesh;
    const hoveredName = hoveredObject.name;
    gl.domElement.style.cursor = "pointer";

    scene.traverse((child) => {
      if (child instanceof Mesh && child.name === hoveredName) {
        if (!child.userData.originalMaterial) {
          child.userData.originalMaterial = child.material;
          child.userData.originalScale = child.scale.clone();
        }
        child.material = child.material.clone();
        (child.material as MeshStandardMaterial).emissive.set("#ffffff");
        (child.material as MeshStandardMaterial).emissiveIntensity = 0.1;
        child.scale.multiplyScalar(1.05);
      }
    });
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    const hoveredObject = e.object as Mesh;
    const hoveredName = hoveredObject.name;
    gl.domElement.style.cursor = "auto";

    scene.traverse((child) => {
      if (child instanceof Mesh && child.name === hoveredName) {
        if (child.userData.originalMaterial) {
          child.material = child.userData.originalMaterial;
          child.scale.copy(child.userData.originalScale);
          delete child.userData.originalMaterial;
          delete child.userData.originalScale;
        }
      }
    });
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    const clickedObject = e.object as Mesh;
    const clickedName = clickedObject.name;

    onObjectClick(clickedName);
  };

  return (
    <Model
      {...props}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    />
  );
};

const Home: React.FC = () => {
  const [scale, setScale] = useState(0.6);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth < 640 ? 0.4 : 0.6);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleObjectClick = (clickedMesh: string) => {
    if (name_to_link[clickedMesh]) {
      navigate(name_to_link[clickedMesh]);
    }
  };

  return (
    <div className="flex-grow flex h-[100vh]">
      <Canvas
        shadows
        camera={{ position: [10, 5, 10], fov: 25 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <group position={[0, -1.2, 0]}>
          <HoverableModel scale={scale} onObjectClick={handleObjectClick} />
        </group>
        <OrbitControls minDistance={10} maxDistance={24} />
      </Canvas>
    </div>
  );
};

export default Home;
