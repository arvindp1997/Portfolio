"use client";
import React from "react";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectSection";

interface TabsContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabsContent({ activeTab, setActiveTab }: TabsContentProps) {
  return (
    <div className="h-[800px] shadow-lg relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      {/* Active Content */}
      <div className="h-full overflow-y-scroll custom-scrollbar">
        {activeTab === "about-me" && <HeroSection setActiveTab={setActiveTab} />}
        {activeTab === "skills" && <SkillsSection />}
        {activeTab === "experience" && <ExperienceSection />}
        {activeTab === "projects" && <ProjectsSection />}
        {activeTab === "education" && <EducationSection />}
        {activeTab === "contact" && <ContactSection />}
      </div>
    </div>
  );
}
