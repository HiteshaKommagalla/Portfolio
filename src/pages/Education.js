// components/Education/EducationSection.jsx
import { useStaggerAnimation } from "../hooks/useStaggerAnimation"                                  
import { educationData } from "../data/educationData"
import EducationTimeline from "../components/EducationTimeline"

const EducationSection = () => {
  const [ref, visibleItems] = useStaggerAnimation(educationData.length, 300, 0);

  return (
    <section id="education" className="w-full py-16 bg-white dark:bg-gray-900 relative transition-colors duration-500">
      <div className="w-full px-4 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold mb-8 text-sm">
          <span className="text-base">⭐</span>
          <span>Education</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-16 max-w-3xl mx-auto">
          My educational journey that shaped my foundation in mathematics and problem-solving skills
        </p>

        <EducationTimeline refProp={ref} items={educationData} visibleItems={visibleItems} />
      </div>
    </section>
  )
}

export default EducationSection
