const SkillCard = ({ skill, visible }) => (
    <div
      className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-3 lg:p-4 text-center min-w-[80px] lg:min-w-[100px] flex flex-col items-center gap-1 transition-all duration-700 hover:-translate-y-2 hover:bg-white/20 ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
      }`}
      style={{ transitionDelay: `${skill.id * 100}ms` }}
    >
      <div
        className={`w-8 h-8 lg:w-10 lg:h-10 ${skill.bgColor} rounded-full flex items-center justify-center text-xs lg:text-sm font-bold mb-1 transition-transform duration-300 hover:rotate-12`}
      >
        <span>{skill.icon}</span>
      </div>
      <div className="text-white font-semibold text-xs lg:text-sm">{skill.name}</div>
      <div className="text-white/90 font-medium text-[10px] lg:text-xs">{skill.percentage}</div>
    </div>
  )
  
  export default SkillCard
  