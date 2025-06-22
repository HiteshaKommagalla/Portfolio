// src/components/Header/Header.jsx
import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import DesktopNav from "../components/DesktopNav";
import MobileMenu from "../components/MobileMenu";

const Header = () => {
  const activeSection = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      <header className="bg-gray-800 dark:bg-gray-900 text-white py-4 sticky top-0 z-50 w-full transition-colors duration-300">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-normal italic">Hitesha's Portfolio</h2>

          <DesktopNav activeSection={activeSection} onNavClick={handleNavClick} />

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      <MobileMenu
        activeSection={activeSection}
        isOpen={isMobileMenuOpen}
        onToggle={toggleMobileMenu}
        onNavClick={handleNavClick}
      />
    </>
  );
};

export default Header;
