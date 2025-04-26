export default function ExperienceCard({ job }) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-6 shadow-lg hover:shadow-md transition duration-300">
      <div className="flex flex-wrap justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-50">{job.role}</h3>
        <span className="bg-gray-800 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded">
          {job.period}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-1">
          <svg
            className="w-4 h-4 text-gray-500 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            ></path>
          </svg>
          <span className="text-gray-100 font-medium">{job.company}</span>
        </div>

        <div className="flex items-center mb-1">
          <svg
            className="w-4 h-4 text-gray-500 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <span className="text-gray-100 text-sm">{job.location}</span>
        </div>
      </div>

      {job.client && (
        <div className="mb-3">
          <span className="text-sm font-medium text-gray-100">Client: </span>
          <span className="text-gray-300">{job.client}</span>
        </div>
      )}

      {job.project && (
        <div className="mb-3">
          <span className="text-sm font-medium text-gray-100">Project: </span>
          <span className="text-gray-300">{job.project}</span>
        </div>
      )}

      {job.description && (
        <p className="text-gray-100 mb-4">{job.description}</p>
      )}

      <div className="flex flex-wrap gap-2 ">
        {job.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-sm "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
