// src/components/Hero/Hero.jsx
import { useEffect, useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useMousePosition } from "../hooks/useMousePosition";
import { scrollToId } from "../utils/scrollToId";
import { downloadCV } from "../utils/downloadCV";
import MotionBackground from "../components/MotionBackground";
import HeroContent from "../components/HomeContent";
import ProfileCard from "../components/ProfileCard";
import SocialLinks from "../components/SocialLinks";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const mousePosition = useMousePosition();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="h-screen relative overflow-hidden w-full bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <MotionBackground x={mousePosition.x} y={mousePosition.y} />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center h-full px-4 sm:px-6 lg:px-8 gap-8 relative z-10">
        <HeroContent
          isLoaded={isLoaded}
          onContactClick={() => scrollToId("contact")}
          onDownloadClick={() => downloadCV("/resume.pdf", "Hitesha_Kommagalla_Resume.pdf")}
        />
        <ProfileCard isLoaded={isLoaded} />
      </div>

      <SocialLinks isLoaded={isLoaded} />

      {/* Dark mode toggle */}
      <div
        className={`fixed right-3 sm:right-5 top-1/2 transform -translate-y-1/2 z-20 transition-all duration-700 delay-1000 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        <button
          onClick={toggleDarkMode}
          className="group bg-gradient-to-r from-orange-400 to-red-400 dark:from-blue-600 dark:to-purple-600 text-white p-3 rounded-full hover:scale-110 hover:rotate-12 transition-all"
          aria-label="Toggle dark mode"
        >
          <span className="group-hover:animate-spin">{isDarkMode ? "🌙" : "☀️"}</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
