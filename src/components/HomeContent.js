// src/components/Home/HomeContent.jsx
const HeroContent = ({ isLoaded, onContactClick, onDownloadClick }) => {
    return (
      <div className="text-center lg:text-left order-2 lg:order-1">
        <div
          className={`bg-gradient-to-r from-yellow-200 to-yellow-300 text-red-600 px-4 py-2 rounded-full inline-block font-semibold mb-6 text-sm transition-all duration-700 hover:scale-105 hover:shadow-lg ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="animate-wave inline-block">👋</span>
          <span className="ml-2">Hi! I'm Hitesha Kommagalla</span>
        </div>
  
        <h1
          className={`text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Full-Stack Web Developer
        </h1>
  
        <p
          className={`text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Creative and detail-oriented Web Developer with a passion for building intuitive, user-friendly
          applications. Proficient in HTML, CSS, JavaScript, and modern frameworks.
        </p>
  
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start transition-all duration-700 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={onContactClick}
            className="group bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
          >
            <span className="flex items-center gap-2">
              <span className="group-hover:animate-bounce">👤</span>
              Contact Me
            </span>
          </button>
  
          <button
            onClick={onDownloadClick}
            className="group border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-full font-semibold text-sm hover:border-purple-600 hover:text-purple-600 transition-all"
          >
            <span className="flex items-center gap-2">
              <span className="group-hover:animate-pulse">📄</span>
              Download CV
            </span>
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroContent;
  