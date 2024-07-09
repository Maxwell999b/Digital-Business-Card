import { useState, useEffect } from "react";
import "./index.css";
import Info from "../components/Info";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import SkillIcons from "../components/SkillIcons";
import Education from "../components/Education";
import Projects from "../components/Projects";
import CallToAction from "../components/CallToAction";
export default function App() {
  // Function to adjust zoom level based on screen width
  const adjustZoomLevel = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 576) {
      document.body.style.zoom = "70%"; // Zoom level for mobile devices
    } else if (screenWidth <= 768) {
      document.body.style.zoom = "70%"; // Zoom level for small tablets
    } else if (screenWidth <= 1024) {
      document.body.style.zoom = "80%"; // Zoom level for tablets
    } else if (screenWidth <= 1200) {
      document.body.style.zoom = "120%"; // Zoom level for small desktops
    } else if (screenWidth <= 1280) {
      document.body.style.zoom = "100%"; // Zoom level for very large desktops
    } else {
      document.body.style.zoom = "100%"; // Default zoom level for larger screens
    }
  };

  // Call adjustZoomLevel initially and on window resize
  useEffect(() => {
    adjustZoomLevel();
    window.addEventListener("resize", adjustZoomLevel);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustZoomLevel);
    };
  }, []);

  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const bodyElement = document.body;

    if (lightMode) {
      htmlElement.classList.add("light-mode");
      bodyElement.classList.add("light-mode");
    } else {
      htmlElement.classList.remove("light-mode");
      bodyElement.classList.remove("light-mode");
    }
  }, [lightMode]);

  return (
    <div className="App">
      <Info lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <Bio />
      <SkillIcons />
      <Education />
      <Projects />
      <CallToAction />
      <Footer />
    </div>
  );
}
