// src/components/Hero/SocialLinks.jsx
const SocialLinks = ({ isLoaded }) => (
    <div
      className={`flex gap-6 justify-center lg:justify-start mt-4 transition-all duration-700 delay-800 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <a
        href="https://github.com/HiteshaKommagalla"
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:scale-110 transition-all"
      >
        <svg className="w-9 h-9 text-gray-800 dark:text-white group-hover:text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373..." /> {/* truncated for brevity */}
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/hitesha-kommagalla-874080311/"
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:scale-110 transition-all"
      >
        <svg className="w-9 h-9 text-gray-800 dark:text-white group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447..." /> {/* truncated for brevity */}
        </svg>
      </a>
    </div>
  );
  
  export default SocialLinks;
  