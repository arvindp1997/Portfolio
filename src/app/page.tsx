"use client";
import { useState } from "react";
import ProfileSidebar from "./components/ProfileSidebar";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState("about-me");

  return (
    <div className="bg-gray-200 shadow-lg p-2">
      <div className=" mx-auto bg-gray-600  shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Profile Sidebar Component */}
          <div className=" md:w-1/4">
          <ProfileSidebar />
          </div>
         

          {/* Main Content Section */}
          <div className="w-full p-6 md:w-3/4">
            <div className="border-b border-gray-200 mb-6">
            <nav className="flex flex-row gap-8 overflow-x-auto no-scrollbar">
            <button
                  onClick={() => setActiveTab("about-me")}
                  className={`pb-4 px-1 font-medium text-sm whitespace-nowrap ${
                    activeTab === "about-me"
                      ? "text-gray-200 border-b-2 border-white"
                      : "text-gray-100 hover:text-gray-400"
                  }`}
                >
                  About Me
                </button>
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`pb-4 px-1 font-medium text-sm ${
                    activeTab === "skills"
                       ? "text-gray-200 border-b-2 border-white"
                      : "text-gray-100 hover:text-gray-400"
                  }`}
                >
                  Skills
                </button>
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`pb-4 px-1 font-medium text-sm ${
                    activeTab === "experience"
                      ? "text-gray-200 border-b-2 border-white"
                      : "text-gray-100 hover:text-gray-400"
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`pb-4 px-1 font-medium text-sm ${
                    activeTab === "projects"
                      ? "text-gray-200 border-b-2 border-white"
                      : "text-gray-100 hover:text-gray-400"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`pb-4 px-1 font-medium text-sm ${
                    activeTab === "education"
                      ? "text-gray-200 border-b-2 border-white"
                      : "text-gray-100 hover:text-gray-400"
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`pb-4 px-1 font-medium text-sm ${
                    activeTab === "contact"
                      ? "text-gray-200 border-b-2 border-white"
                      : "text-gray-100 hover:text-gray-400"
                  }`}
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Conditional rendering of content based on active tab */}
            <div className="h-[800px] shadow-lg relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

              {activeTab === "about-me" && (
                <div className="h-full ">
                  <HeroSection setActiveTab={setActiveTab} />
                </div>
              )}
              {activeTab === "skills" && (
                <div className="h-full">
                  <SkillsSection />
                </div>
              )}
              {activeTab === "experience" && (
                <div className="h-full overflow-y-scroll">
                  <ExperienceSection />
                </div>
              )}
              {activeTab === "projects" && (
                <div className="h-full overflow-y-scroll">
                  <ProjectsSection />
                </div>
              )}
              {activeTab === "education" && (
                <div className="h-full ">
                  <EducationSection />
                </div>
              )}
              {activeTab === "contact" && (
                <div className="h-full">
                  <ContactSection />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
