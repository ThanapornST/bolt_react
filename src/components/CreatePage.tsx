import React, { useState } from 'react';
import Sidebar from './CreatePage/Sidebar';
import Header from './CreatePage/Header';
import ProjectCard from './CreatePage/ProjectCard';
import Stats from './CreatePage/Stats';
import { Menu } from 'lucide-react';

const CreatePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-black">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <Sidebar />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            <Stats />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <ProjectCard
                type="new"
                onClick={() => {}}
              />
              <ProjectCard
                title="The Mystery of the Ancient Scroll"
                description="A thrilling adventure through time"
                progress={65}
                lastEdited="2 hours ago"
              />
              <ProjectCard
                title="Love in Paris"
                description="A romantic journey in the city of lights"
                progress={30}
                lastEdited="1 day ago"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreatePage;