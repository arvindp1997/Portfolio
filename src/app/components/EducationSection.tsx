import EducationCard from "./EducationCard";

export default function EducationSection() {
  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "IIIT Bhubaneswar",
      year: "July 2020",
      location: "Bhubaneswar, Odisha",
      score: "7.42 CGPA",
    },
    {
      degree: "12th CBSE Board",
      institution: "KV AFS Ojhar, Nashik",
      year: "July 2015",
      location: "Maharashtra, India",
      score: "86.6%",
    },
    {
      degree: "10th CBSE Board",
      institution: "KV AFS Ojhar, Nashik",
      year: "July 2013",
      location: "Maharashtra, India",
      score: "9.4 CGPA",
    },
  ];

  const courses = [
    "Data Structures",
    "Algorithms",
    "Operating System",
    "Database Management System",
    "Software Engineering",
  ];

  return (
    <div className=" bg-gradient-to-r from-gray-800 to-gray-600 p-4 h-full">
    
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Education</h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>

      {/* <div className="mt-8 bg-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">Additional Courses</h3>
          <ul className="space-y-2 text-gray-600">
            {courses.map((course, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {course}
              </li>
            ))}
          </ul>
        </div> */}
    </div>
  );
}
