import TechBadge from "./TechBadge"
import { useState } from "react"

const ProjectCard = ({ project, visible }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto transition-all duration-700 ease-out transform group ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
      } hover:shadow-2xl hover:scale-105 relative`}
      style={{ transitionDelay: `${project.id * 200}ms` }}
    >
      {/* Animated border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl animate-spin-slow">
        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl" />
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-2 min-h-[350px] relative z-10 ${project.id % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
      >
        {/* Info side */}
        <div
          className={`p-6 lg:p-10 flex flex-col justify-center text-center lg:text-left ${
            project.id % 2 === 1 ? "lg:col-start-2" : ""
          }`}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: project.color }}>
            {project.name}
          </h3>
          <h4 className="text-gray-800 dark:text-gray-200 text-lg font-semibold mb-2">{project.title}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mb-6">{project.description}</p>

          <div className="flex gap-2 mb-6 justify-center lg:justify-start flex-wrap">
            {project.technologies.map((tech, i) => (
              <TechBadge key={i} name={tech.name} bgColor={tech.bgColor} />
            ))}
          </div>

          {/* Reverted button */}
          <button
            onClick={() => project.link && window.open(project.link, "_blank")}
            className="group bg-gradient-to-r from-purple-400 to-purple-600 text-white border-none px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold cursor-pointer text-base inline-flex items-center gap-2 transition-all duration-300 self-center lg:self-start hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
          >
            <span className="relative z-10">{project.link ? "Visit Website" : "View Project"}</span>
            <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              ↗
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Image side */}
        <div
          className={`${project.bgColor} flex items-center justify-center relative overflow-hidden cursor-pointer ${
            project.id % 2 === 1 ? "lg:col-start-1" : ""
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/20 transition-all duration-500 ${
              hovered ? "scale-110 opacity-100" : "scale-100 opacity-0"
            }`}
          />
          {/* Actual image */}
          <img
            src={project.image}
            alt={project.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              hovered ? "scale-110 rotate-1" : "scale-100 rotate-0"
            }`}
            onError={(e) => {
              console.warn("Failed to load image:", project.image)
              e.currentTarget.style.display = "none"
            }}
          />
          {/* Fallback text when no image */}
          {!hovered && (
            <div
              className="absolute z-10 text-xl lg:text-2xl font-black font-sans tracking-wide text-white transition-opacity duration-500"
              style={{ opacity: 0.7 }}
            >
              {project.name.toUpperCase()}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
