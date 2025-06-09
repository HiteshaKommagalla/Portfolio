const Projects = () => {
  const projectsData = [
    {
      title: "E-Learning Platform",
      description:
        "A sleek and modern E-learning Monster template designed to simplify online education with intuitive navigation and engaging visuals.",
      image: "https://s.tmimgcdn.com/scr/800x500/107500/e-learning-online-courses-website-template_107581-original.jpg",
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/HiteshaKommagalla/project",
    },
    {
      title: "Quiz App",
      description:
        "An interactive quiz app offering aptitude tests tailored for Graduates and MCA CET exam preparation.",
      image: "https://drive.google.com/file/d/1Skl3vdjf0DnGfKQ3u217XTdMG9B6ED5c/view?usp=drive_link",
      technologies: ["React", "TailwinCSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/HiteshaKommagalla/project",
    },
    {
      title: "Pokedex",
      description: "A Pokédex game where two hands, each with 4 Pokémon cards, battle based on total experience—highest sum wins the round!",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/HiteshaKommagalla/portfolio",
    },
    {
      title: "Deck of Cards",
      description: "A classic deck of cards app that shuffles, draws, and displays cards for endless gameplay possibilities.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/HiteshaKommagalla/blog-platform",
    },
    {
      title: "To-Do List",
      description:
        "A simple and efficient To-Do List app to organize tasks, set priorities, and stay productive every day.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/HiteshaKommagalla/project",
    },

    {
      title: "Vending Machine",
      description: "A virtual vending machine app that lets users select and purchase snacks with a simulated coin balance.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/HiteshaKommagalla/quiz-app",
    },
    {
      title: "CheezJokes App",
      description:
        "A fun-filled CheezJokes App that serves up random cheesy jokes to lighten your mood and make you smile.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/HiteshaKommagalla/project",
    },
    {
      title: "Lottery App",
      description:
        "A fun lottery app that lets users pick numbers and try their luck to win exciting prizes.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      liveUrl: "https://project-demo.com",
      githubUrl: "https://github.com/HiteshaKommagalla/project",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title animate-fade-in">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15,3 21,3 21,9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
