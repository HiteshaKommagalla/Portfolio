// components/About/SectionHeading.jsx
const SectionHeading = ({ isVisible }) => (
    <div
      className={`bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold mb-8 text-sm transition-all duration-700 delay-200 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
    >
      <span className="text-base">⭐</span>
      <span>About Me</span>
    </div>
  )
  
  export default SectionHeading
  