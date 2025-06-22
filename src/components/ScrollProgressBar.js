// src/components/ScrollProgressBar.jsx
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / scrollHeight) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[9999]">
      <div
        className="h-full bg-orange-400 transition-all duration-100 ease-out"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
