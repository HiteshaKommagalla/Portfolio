import SkillCard from "./SkillCard"

const SkillGroup = ({ title, skills, visibleItems }) => (
  <div className="text-center">
    <h3 className="text-white text-xl lg:text-2xl font-semibold mb-6">{title}</h3>
    <div className="flex gap-2 lg:gap-3 flex-wrap justify-center">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} visible={visibleItems.has(skill.id)} />
      ))}
    </div>
  </div>
)

export default SkillGroup
