export default function ProjectCard({ project }) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-6 shadow-lg hover:shadow-md    overflow-hidden  transition duration-300 transform hover:-translate-y-2">
      <div className="h-48 bg-gradient-to-r from-gray-960 to-gray-600 flex items-center justify-center p-6">
        <svg
          className="w-20 h-20 text-white opacity-75"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-100 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-800 px-3 py-1  text-sm font-medium shadow-sm rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demoLink}
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition duration-300"
          >
            Live Demo
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
          <a
            href={project.codeLink}
            className="inline-flex items-center px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-md border border-gray-600 hover:bg-indigo-50 transition duration-300"
          >
            Source Code
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
