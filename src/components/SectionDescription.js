// components/About/SectionDescription.jsx
const SectionDescription = ({ isVisible }) => (
    <p
      className={`text-gray-400 dark:text-gray-400 text-base leading-relaxed w-full mb-8 transition-all duration-700 delay-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      Creative and detail-oriented Web Developer with a passion for building intuitive, user-friendly web applications.
      Proficient in HTML, CSS, JavaScript, and modern frameworks, with a strong foundation in responsive design and
      performance optimization. I love creating digital experiences that solve real-world problems and bring ideas to
      life through clean, efficient code.
    </p>
  )
  
  export default SectionDescription
  