import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Model } from "./Final_2.jsx";

export function Enhanced_Final() {
  const [hovered, setHovered] = useState(null); // Tracks hovered object
  const navigate = useNavigate();

  const handlePointerOver = (name) => {
    setHovered(name);
  };

  const handlePointerOut = () => {
    setHovered(null);
  };

  const handleClick = (name) => {
    switch (name) {
      case "about_text":
        navigate("/about");
        break;
      case "faq_text":
        navigate("/faq");
        break;
      case "photos_text":
        navigate("/photos");
        break;
      case "schedule_text":
        navigate("/schedule");
        break;
      case "tracks_text":
        navigate("/tracks");
        break;
      default:
        break;
    }
  };

  // const spotlightPositions = {
  //   about_text: [-0.752, 0.039, -0.301],
  //   faq_text: [0, 5, 0],
  //   photos_text: [0, 5, 0],
  //   schedule_text: [0, 5, 0],
  //   tracks_text: [0, 5, 0],
  // };

  return (
    <>
      {/* Add a spotlight to highlight hovered objects */}
      {/* {hovered && (
        <spotLight
          intensity={30} // Highlight intensity
          position={[-0.752, 5.039, -0.301]} // Adjust position based on your scene
          angle={0.3}
          penumbra={1}
          target-position={[0, 0, 0]} // Adjust target based on hovered object position
          color="yellow"
        />
      )} */}

      {/* Render the 3D model */}
      <Model
        onPointerOver={(e) => {
          e.stopPropagation();
          handlePointerOver(e.object.name); // Pass the name of the hovered object
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          handlePointerOut(); // Clear hover state
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleClick(e.object.name); // Handle click based on object name
        }}
        hovered={hovered} // Pass hovered state to highlight objects
        scale={0.6}
      />
    </>
  );
}
