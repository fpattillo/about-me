import { CurriculumVitae } from "./tabs/cv";
import { Hobbies } from "./tabs/hobbies";
import { Studies } from "./tabs/studies";
import { createUseStyles } from "react-jss";
import { useEffect, useState } from "react";
import Felipe from "../assets/yop.jpeg";
import flashingLights from "../assets/flashing_lights.mp3";

const useStyles = createUseStyles((theme) => ({
  "@keyframes App-logo-spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
  imageContainer: {
    position: "relative",
    gridColumn: "1 / 2",
    height: "40vmin",
    width: "40vmin", // Added to maintain a square shape for the round image
    borderRadius: "50%",
    overflow: "hidden", // Ensure the overlay and image fit within the rounded container
  },
  image: {
    height: "40vmin",
    borderRadius: "50%",
    "@media (prefers-reduced-motion: no-preference)": {
      animation: ({ imageHovered }) =>
        `${imageHovered ? "$App-logo-spin" : "none"} infinite 20s linear`,
    },
  },
  container: {
    display: "grid",
    marginTop: "70px",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    gridAutoRows: "minmax(100px, auto)",
    "@media (max-width: 1280px)": {
      // switch to vertical layout on smaller screens
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  content: {
    gridColumn: "2 / 4",
    width: "50vw",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 1280px)": {
      width: "100%",
    },
    padding: "20px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay with transparency
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0, // Initially invisible
    transition: "opacity 0.3s ease",
    zIndex: 1, // Ensure the overlay is above the image
  },
  overlayHovered: {
    opacity: 1, // Fully visible on hover
  },
}));

export const Tab = ({ currentTab }) => {
  const [imageHovered, setImageHovered] = useState(false);
  const [imageActivated, setImageActivated] = useState(false);
  const [overlayHovered, setOverlayHovered] = useState(false);
  const classes = useStyles({ imageHovered });

  useEffect(() => {
    const audioElement = document.getElementById("audio-element");

    if (audioElement && imageActivated) {
      if (imageHovered) {
        audioElement.play();
      } else {
        audioElement.pause();
        audioElement.currentTime = 0; // Reset audio to the beginning
      }
    }
  }, [imageHovered, imageActivated]);

  const toggleImageHover = () => {
    if (imageActivated) setImageHovered(!imageHovered);
    else setOverlayHovered(!overlayHovered);
  };

  const toggleOverlayClick = () => {
    if (!imageActivated) {
      setImageActivated(true);
      setImageHovered(true);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div
          className={classes.imageContainer}
          onMouseEnter={toggleImageHover}
          onMouseLeave={toggleImageHover}
        >
          <img src={Felipe} className={classes.image} alt="Felipe's face" />
          <div
            className={`${classes.overlay} ${
              overlayHovered && !imageActivated ? classes.overlayHovered : ""
            }`}
            onClick={toggleOverlayClick}
          >
            <p className="text-white font-medium text-lg">ACTIVATE</p>
          </div>
        </div>
        <div className={classes.content}>
          {currentTab === "CV" && <CurriculumVitae />}
          {currentTab === "hobbies" && <Hobbies />}
          {currentTab === "studies" && <Studies />}
        </div>
      </div>
      <audio loop src={flashingLights} id="audio-element" />
    </>
  );
};
