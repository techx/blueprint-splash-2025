import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../Final_model_4.jsx";
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

// Map of routes to image paths that need preloading
const routeImages: { [key: string]: string[] } = {
  "/about": ["/images/About/basket.svg", "/images/About/bread.svg"],
  "/faq": ["/images/Faq/faq_closed.svg", "/images/Faq/faq_asset.svg"],
  "/photos": [
    "/images/Photos/transparent_bg.svg",
    "/images/Photos/photo_string.svg",
  ],
  "/schedule": ["/images/Schedule/sched_bg.svg"],
  "/tracks": ["/images/Tracks/boxstates/box_closed.png"],
};

// Helper function to preload images
const preloadImages = (imagePaths: string[]) => {
  return Promise.all(
    imagePaths.map((path) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = path;
      });
    })
  );
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
  const navigate = useNavigate();

  const handleObjectClick = async (clickedMesh: string) => {
    const route = name_to_link[clickedMesh];
    if (route) {
      // Preload images before navigation
      try {
        await preloadImages(routeImages[route]);
      } catch (err) {
        console.error("Failed to preload some images:", err);
      }
      navigate(route);
    }
  };

  return (
    <div className="flex-grow flex h-[100vh]">
      <Suspense
        fallback={
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 border-4 border-magenta border-t-light-pink rounded-full animate-spin mx-auto"></div>
          </div>
        }
      >
        <Canvas
          shadows
          camera={{ position: [10, 5, 10], fov: 25 }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <group position={[0, -1.8, 0]}>
            <HoverableModel scale={0.8} onObjectClick={handleObjectClick} />
          </group>
          <OrbitControls
            minDistance={16}
            maxDistance={16}
            maxPolarAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Home;
