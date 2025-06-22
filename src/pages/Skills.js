import { useStaggerAnimation } from "../hooks/useStaggerAnimation"
import SkillGroup from "../components/SkillGroup"
import { frontendSkills, backendSkills } from "../data/SkillsData"

const Skills = () => {
  const totalSkills = frontendSkills.length + backendSkills.length
  const [ref, visibleItems] = useStaggerAnimation(totalSkills, 150)

  return (
    <section
      id="skills"
      className="w-full py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative text-white transition-colors duration-500"
    >
      <div className="w-full px-4 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold mb-8 text-sm">
          <span className="text-base">⭐</span>
          <span>SKILLS</span>
        </div>
        <p className="text-white/80 text-base leading-relaxed mb-16 max-w-3xl mx-auto">
          My technical skills and expertise in various technologies and frameworks.
        </p>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <SkillGroup title="Frontend Skills" skills={frontendSkills} visibleItems={visibleItems} />
          <SkillGroup title="Backend & Tools" skills={backendSkills} visibleItems={visibleItems} />
        </div>
      </div>
    </section>
  )
}

export default Skills
