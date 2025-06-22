// components/About/AboutSection.jsx
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import SectionHeading from "../components/SectionHeading"
import SectionTitle from "../components/SectionTitle"
import SectionDescription from "../components/SectionDescription"

const AboutSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.3)

  return (
    <section
      id="about"
      ref={ref}
      className={`w-full py-16 bg-gray-50 dark:bg-gray-800 relative transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-30 translate-y-10"
      }`}
    >
      <div className="w-full px-4">
        <SectionHeading isVisible={isVisible} />
        <SectionTitle isVisible={isVisible} />
        <SectionDescription isVisible={isVisible} />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 via-red-400 via-pink-500 to-purple-600"></div>
    </section>
  )
}

export default AboutSection
