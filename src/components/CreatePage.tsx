import React, { useState } from 'react';
import Sidebar from './CreatePage/Sidebar';
import Header from './CreatePage/Header';
import ProjectCard from './CreatePage/ProjectCard';
import Stats from './CreatePage/Stats';
import { Menu, X, PenSquare } from 'lucide-react';

const CreatePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleNewProject = () => {
    setShowCreateModal(true);
  };

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
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <Sidebar onNewProject={handleNewProject} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar onNewProject={handleNewProject} />
      </div>

      {/* Create Title Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setShowCreateModal(false)}></div>
            
            <div className="relative bg-black rounded-lg max-w-lg w-full p-6 overflow-hidden">
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Create Title</h2>
              <p className="text-gray-400 mb-8">The type of story you want to create</p>

              <div className="grid grid-cols-2 gap-4">
                <button
                  className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-colors group"
                  onClick={() => {}}
                >
                  <PenSquare className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-3" />
                  <span className="text-white font-medium">Episodic Story</span>
                  <span className="text-gray-400 text-sm">(with multiple chapters)</span>
                </button>

                <button
                  className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-colors group"
                  onClick={() => {}}
                >
                  <PenSquare className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-3" />
                  <span className="text-white font-medium">Create Title</span>
                  <span className="text-gray-400 text-sm">(one-shot)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            <Stats />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <ProjectCard
                type="new"
                onClick={handleNewProject}
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