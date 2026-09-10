import ProjectCard from './ProjectCard'
import projects from '../../data/projects'

const ProjectsSection = () => {
  return (
    <section className='scroll-mt-24 min-h-screen py-20 px-4 text-center bg-white dark:bg-gray-900 dark:text-white'>
      <h2 className='text-3xl font-semibold text-gray-800 dark:text-white'>
        My Work 
      </h2>

      <h3 className='text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400'>
        Featured Projects
      </h3>

      {/* Project Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {projects.map((project, idx) => (
          <div
            key={idx}
          >
            {project.title}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
