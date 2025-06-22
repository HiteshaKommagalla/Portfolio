import { useStaggerAnimation } from "../hooks/useStaggerAnimation"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projectsData"

const Projects = () => {
  const [ref, visibleItems] = useStaggerAnimation(projects.length, 400)

  return (
    <section id="projects" className="w-full py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="w-full px-4 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold mb-8 text-sm">
          <span className="text-base animate-spin-slow">⭐</span>
          <span>Projects</span>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-base mb-16 max-w-3xl mx-auto">
          Here are some of my featured projects that showcase my skills in web development, from responsive design to
          full-stack applications.
        </p>

        <div ref={ref} className="flex flex-col gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} visible={visibleItems.has(project.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
