// src/components/Home/ProfileCard.jsx
const ProfileCard = ({ isLoaded }) => {
    return (
      <div className="relative h-full flex items-center justify-center order-1 lg:order-2">
        <div
          className={`relative w-full h-64 sm:h-80 lg:h-[600px] max-w-md lg:max-w-none bg-gradient-to-br from-orange-400 via-red-400 via-pink-500 to-purple-600 rounded-3xl flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 delay-300 hover:scale-105 hover:rotate-1 group ${
            isLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-90 rotate-3"
          }`}
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow">
            <div className="w-full h-full bg-gradient-to-br from-orange-400 via-red-400 via-pink-500 to-purple-600 rounded-3xl" />
          </div>
  
          <h2
            className={`text-white text-2xl lg:text-4xl font-light mb-4 text-center transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="hover:animate-pulse cursor-default">Hitesha Kommagalla</span>
          </h2>
  
          <div
            className={`w-60 lg:w-72 h-72 lg:h-96 flex items-center justify-center transition-all duration-700 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full h-full bg-gray-900/90 rounded-2xl p-6 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-xs ml-2">portfolio.js</span>
              </div>
  
              <div className="text-left text-sm font-mono space-y-2">
                <div className="text-purple-400">
                  <span className="text-blue-400">const</span> developer = {"{"}
                </div>
                <div className="ml-4 text-green-400">name: <span className="text-yellow-300">"Hitesha"</span>,</div>
                <div className="ml-4 text-green-400">skills: <span className="text-cyan-300">["React", "JS"]</span>,</div>
                <div className="ml-4 text-green-400">passion: <span className="text-pink-300">"Web Dev"</span></div>
                <div className="text-purple-400">{"}"}</div>
                <div className="text-gray-500"><span className="text-blue-400">console</span>.log(developer)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  