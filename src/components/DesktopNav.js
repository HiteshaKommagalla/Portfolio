// src/components/Header/DesktopNav.jsx
import { navItems } from "./NavItems";

const DesktopNav = ({ activeSection, onNavClick }) => (
  <nav className="hidden lg:block">
    <ul className="flex gap-12">
      {navItems.map(({ href, label }) => {
        const sectionId = href.substring(1);
        const isActive = activeSection === sectionId;
        return (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => onNavClick(e, href)}
              className={`text-sm tracking-wide relative pb-1 transition-all duration-300 hover:text-orange-400 ${
                isActive ? "text-orange-400" : "text-white"
              }`}
            >
              {label}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 animate-pulse" />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default DesktopNav;
