const TechBadge = ({ name, bgColor }) => (
    <div
      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-[10px] lg:text-xs font-bold text-white ${bgColor} transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer`}
    >
      {name}
    </div>
  )
  
  export default TechBadge
  