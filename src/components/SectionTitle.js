// components/About/SectionTitle.jsx
const SectionTitle = ({ isVisible }) => (
    <h2
      className={`text-3xl lg:text-4xl font-bold text-gray-500 dark:text-gray-300 mb-6 leading-tight transition-all duration-700 delay-400 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      Hi! I'm Hitesha Kommagalla
    </h2>
  )
  
  export default SectionTitle
  