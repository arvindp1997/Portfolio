'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = {
    languages: ['JavaScript', 'TypeScript', 'C++'],
    frontendTech: [
      'React.js', 
      'Next.js', 
      'HTML', 
      'CSS', 
      'Tailwind CSS', 
      'Material UI', 
      'Styled Components', 
      'CSS Modules'
    ],
    stateManagement: ['Redux', 'MobX', 'Zustand', 'Apollo GraphQL'],
    backendTech: ['Node.js', 'Express', 'MongoDB', 'SQL'],
    testing: ['Jest', 'Cypress', 'Storybook']
  };

  const experience = [
    {
      role: "Senior Consultant",
      company: "StatusNeo",
      period: "Jan 2025 - Present",
      location: "Gurgaon - Onsite",
      client: "Mckinsey & Company",
      project: "Source AI project",
      tech: ["ReactJs", "NextJs", "TypeScript", "Javascript", "Jest", "Cypress"]
    },
    {
      role: "Software Engineer",
      company: "Tachyon Technologies",
      period: "July 2024 - Jan 2025",
      location: "Hyderabad - Remote",
      client: "Simpplr - Canada",
      description: "Led maintenance and enhancement of Tiptap micro-frontend editor with 20% performance improvement",
      tech: ["ReactJs", "TypeScript", "Javascript", "Jest", "Cypress"]
    },
    {
      role: "Senior Software Engineer - L2",
      company: "DeltaSoft Consulting",
      period: "June 2023 - June 2024",
      location: "Hybrid - (Kochi, WFH)",
      client: "Bravo Savings Network & Sameepam",
      description: "Engineered CMS reducing manual overhead by 70% and improved app load time by 30%",
      tech: ["ReactJs", "JavaScript", "TypeScript", "MaterialUI", "Tailwind", "Apollo GraphQL", "Zustand", "Mobx"]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "IIIT Bhubaneswar",
      year: "July 2020",
      location: "Bhubaneswar, Odisha"
    },
    {
      degree: "12th CBSE Board",
      institution: "KV AFS Ojhar, Nashik",
      year: "July 2015",
      location: "Maharashtra, India",
      score: "86.6%"
    },
    {
      degree: "10th CBSE Board",
      institution: "KV AFS Ojhar, Nashik",
      year: "July 2013",
      location: "Maharashtra, India",
      score: "CGPA: 9.4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Profile Section */}
          <div className="bg-indigo-700 md:w-1/4 p-6 text-white">
            <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 bg-indigo-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold">AP</span>
              </div>
              <h2 className="text-2xl font-bold">Aravind Pandit</h2>
              <p className="text-indigo-200">Senior Frontend Engineer</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 border-b border-indigo-500 pb-2">Contact</h3>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-sm">arvindputtu@gmail.com</span>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-sm">6371460914</span>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                <a href="#" className="text-sm hover:underline">Github: arvindp-github</a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                </svg>
                <a href="#" className="text-sm hover:underline">LinkedIn: arvindp-linkedin</a>
              </div>
            </div>
            
            <button className="w-full bg-white text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300">
              Download CV
            </button>
          </div>
          
          {/* Main Content Section */}
          <div className="md:w-3/4 p-6">
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                <button 
                  onClick={() => setActiveTab('skills')}
                  className={`pb-4 px-1 font-medium text-sm ${activeTab === 'skills' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
                  Skills
                </button>
                <button 
                  onClick={() => setActiveTab('experience')}
                  className={`pb-4 px-1 font-medium text-sm ${activeTab === 'experience' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
                  Experience
                </button>
                <button 
                  onClick={() => setActiveTab('education')}
                  className={`pb-4 px-1 font-medium text-sm ${activeTab === 'education' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
                  Education
                </button>
              </nav>
            </div>
            
            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Expertise</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-5 shadow">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill, index) => (
                        <span key={index} className="bg-white text-indigo-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-5 shadow">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3">Frontend Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontendTech.map((skill, index) => (
                        <span key={index} className="bg-white text-indigo-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 shadow">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3">State Management</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.stateManagement.map((skill, index) => (
                        <span key={index} className="bg-white text-indigo-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-lg p-5 shadow">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3">Testing Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.testing.map((skill, index) => (
                        <span key={index} className="bg-white text-indigo-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 shadow">
                    <h3 className="text-lg font-semibold text-indigo-800 mb-3">Backend Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.backendTech.map((skill, index) => (
                        <span key={index} className="bg-white text-indigo-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Overview</h2>
                  <p className="text-gray-600 leading-relaxed">
                    A passionate Senior Frontend Engineer with 5+ years of experience building scalable web applications.
                    Specialized in React ecosystem with strong expertise in TypeScript, modern state management solutions,
                    and frontend architecture. Committed to crafting exceptional user experiences and solving complex 
                    problems with elegant solutions.
                  </p>
                </div>
              </div>
            )}
            
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Work Experience</h2>
                
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-300">
                      <div className="flex flex-wrap justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-indigo-700">{job.role}</h3>
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.period}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center mb-1">
                          <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                          <span className="text-gray-700 font-medium">{job.company}</span>
                        </div>
                        
                        <div className="flex items-center mb-1">
                          <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span className="text-gray-600 text-sm">{job.location}</span>
                        </div>
                      </div>
                      
                      {job.client && (
                        <div className="mb-3">
                          <span className="text-sm font-medium text-gray-700">Client: </span>
                          <span className="text-gray-600">{job.client}</span>
                        </div>
                      )}
                      
                      {job.project && (
                        <div className="mb-3">
                          <span className="text-sm font-medium text-gray-700">Project: </span>
                          <span className="text-gray-600">{job.project}</span>
                        </div>
                      )}
                      
                      {job.description && (
                        <p className="text-gray-600 mb-4">{job.description}</p>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        {job.tech.map((tech, i) => (
                          <span key={i} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex justify-center mt-6">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                      View More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Education Tab */}
            {activeTab === 'education' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-300">
                      <div className="flex flex-wrap justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-indigo-700">{edu.degree}</h3>
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {edu.year}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex items-center mb-1">
                          <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                          <span className="text-gray-700 font-medium">{edu.institution}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span className="text-gray-600 text-sm">{edu.location}</span>
                        </div>
                      </div>
                      
                      {edu.score && (
                        <div className="mt-2">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {edu.score}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-indigo-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">Additional Courses</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Data Structures
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Algorithms
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Operating System
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Database Management System
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Software Engineering
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}