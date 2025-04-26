export default function EducationCard({ education }) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg p-6 shadow-lg hover:shadow-md transition duration-300">
      <div className="flex flex-wrap justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-100">{education.degree}</h3>
        <span className="bg-gray-800 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded">
          {education.year}
        </span>
      </div>

      <div className="mb-3">
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            ></path>
          </svg>
          <span className="text-gray-100 font-medium">
            {education.institution}
          </span>
        </div>

        <div className="flex items-center">
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
          <span className="text-gray-100 text-sm">{education.location}</span>
        </div>
      </div>

      {education.score && (
        <div className="mt-2">
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1.5 rounded">
            {education.score}
          </span>
        </div>
      )}
    </div>
  );
}
