"use client";
import { useState } from "react";
import ProfileSidebar from "./components/ProfileSidebar";
import TabsNavigation from "./components/TabsNavigation";
import TabsContent from "./components/TabsContent";

export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState("about-me");

  return (
    <div className="bg-gray-200 shadow-lg p-2">
      <div className="mx-auto bg-blue-600 shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <div className="w-full p-6 md:w-3/4">
            <div className="border-b border-gray-200 mb-6">
              <TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <TabsContent activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
