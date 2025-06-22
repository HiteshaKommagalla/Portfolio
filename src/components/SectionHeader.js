const SectionHeader = ({ isVisible, label, title, description }) => (
    <>
      <div
        className={`bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold mb-8 text-sm transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <span className="text-base">⭐</span>
        <span>{label}</span>
      </div>
      <h2
        className={`text-white text-3xl lg:text-4xl font-bold mb-6 leading-tight transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-white/80 text-base leading-relaxed mb-16 max-w-2xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {description}
        </p>
      )}
    </>
  )
  
  export default SectionHeader
  