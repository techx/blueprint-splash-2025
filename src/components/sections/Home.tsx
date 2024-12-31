import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../Final_model.jsx";
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
  const meshRef = useRef<Mesh>(null);
  const { scene } = useThree();

  const handlePointerOver = (e: any) => {
    e.stopPropagation();
    const hoveredObject = e.object as Mesh; // Ensure it's a mesh
    const hoveredName = hoveredObject.name; // Name of the hovered object

    // console.log(`Hovered over: ${hoveredName}`);

    // Traverse the entire scene to find all meshes with the same name
    scene.traverse((child) => {
      if (child instanceof Mesh && child.name === hoveredName) {
        if (!child.userData.originalMaterial) {
          child.userData.originalMaterial = child.material; // Save the original material
          child.userData.originalScale = child.scale.clone(); // Save original scale
        }
        child.material = child.material.clone(); // Clone the material
        (child.material as MeshStandardMaterial).color.set("hotpink"); // Set hover color
        child.scale.multiplyScalar(1.05); // Make it slightly larger
      }
    });
  };

  const handlePointerOut = (e: any) => {
    e.stopPropagation();
    const hoveredObject = e.object as Mesh; // Ensure it's a mesh
    const hoveredName = hoveredObject.name; // Name of the hovered object

    // console.log(`Unhovered: ${hoveredName}`);

    // Traverse the entire scene to restore materials for all meshes with the same name
    scene.traverse((child) => {
      if (child instanceof Mesh && child.name === hoveredName) {
        if (child.userData.originalMaterial) {
          child.material = child.userData.originalMaterial; // Restore the original material
          child.scale.copy(child.userData.originalScale); // Restore original scale
          delete child.userData.originalMaterial; // Clean up userData
          delete child.userData.originalScale;
        }
      }
    });
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    const clickedObject = e.object as Mesh; // Ensure it's a mesh
    const clickedName = clickedObject.name; // Name of the clicked object

    // console.log(`Clicked: ${clickedName}`);
    onObjectClick(clickedName);
  };

  return (
    <Model
      {...props}
      ref={meshRef}
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

    handleResize(); // Set initial scale
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleObjectClick = (clickedMesh: string) => {
    // console.log(`clicked ${clickedMesh}`);
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
