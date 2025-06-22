// src/components/Header/MobileMenu.jsx
import { navItems } from "./NavItems";

const MobileMenu = ({ activeSection, isOpen, onToggle, onNavClick }) => (
  <div
    className={`fixed inset-0 bg-black bg-opacity-95 z-40 lg:hidden transition-all duration-300 ${
      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    onClick={onToggle}
  >
    <div className="flex flex-col justify-center items-center h-full relative">
      <h3 className="absolute top-8 left-8 text-white text-2xl font-light italic">Menu</h3>

      <nav className="flex flex-col items-center space-y-8 w-full max-w-md px-8">
        {navItems.map(({ href, label }, index) => {
          const sectionId = href.substring(1);
          const isActive = activeSection === sectionId;

          return (
            <div
              key={href}
              className={`w-full text-center transform transition duration-500 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a
                href={href}
                onClick={(e) => onNavClick(e, href)}
                className={`block text-xl tracking-wider py-4 relative transition-all duration-300 ${
                  isActive ? "text-orange-400" : "text-white"
                } hover:text-orange-400`}
              >
                {label}
                <div className="w-full h-px bg-gray-600 mt-4"></div>
                {isActive && <div className="absolute bottom-3 left-0 w-full h-px bg-orange-400"></div>}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  </div>
);

export default MobileMenu;
