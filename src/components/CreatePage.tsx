import React, { useState } from 'react';
import Sidebar from './CreatePage/Sidebar';
import Header from './CreatePage/Header';
import ProjectCard from './CreatePage/ProjectCard';
import Stats from './CreatePage/Stats';
import CreateTitleModal from './CreatePage/CreateTitleModal';
import TitleForm from './CreatePage/TitleForm';
import { Menu } from 'lucide-react';

const CreatePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showTitleForm, setShowTitleForm] = useState(false);
  const [formData, setFormData] = useState({
    novelTitle: '',
    numberOfCharacters: '',
    plotSummary: '',
    additionalInfo: '',
    toneOfStory: '',
    storyStructure: '',
    genre: '',
    era: '',
    selectedTime: '30'
  });

  const handleNewProject = () => {
    setShowCreateModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateTitle = () => {
    setShowCreateModal(false);
    setShowTitleForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-black">
          <Sidebar onNewProject={handleNewProject} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar onNewProject={handleNewProject} />
      </div>

      {showCreateModal && (
        <CreateTitleModal
          onClose={() => setShowCreateModal(false)}
          onCreateTitle={handleCreateTitle}
        />
      )}

      {showTitleForm && (
        <TitleForm
          formData={formData}
          onClose={() => setShowTitleForm(false)}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
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