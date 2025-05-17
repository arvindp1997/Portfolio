"use client";
import React from "react";

interface TabsNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "about-me", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function TabsNavigation({ activeTab, setActiveTab }: TabsNavigationProps) {
  return (
    <nav className="flex flex-row gap-8 overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-4 px-1  text-sm whitespace-nowrap ${
            activeTab === tab.id
              ? "text-gray-200 border-b-2 border-white font-bold"
              : "text-gray-100 hover:text-gray-400 font-medium"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
