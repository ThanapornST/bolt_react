import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './CreatePage/Sidebar';
import Header from './CreatePage/Header';
import ProjectCard from './CreatePage/ProjectCard';
import Stats from './CreatePage/Stats';
import { Menu, X, PenSquare, Image as ImageIcon } from 'lucide-react';

interface CreateFormData {
  title: string;
  numberOfCharacters: string;
  plotSummary: string;
  additionalInfo: string;
  toneOfStory: string;
  storyStructure: string;
  genre: string;
  specifyEra: string;
  coverImage?: File;
}

const CreatePage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedType, setSelectedType] = useState<'episodic' | 'oneshot' | null>(null);
  const [formData, setFormData] = useState<CreateFormData>({
    title: '',
    numberOfCharacters: '',
    plotSummary: '',
    additionalInfo: '',
    toneOfStory: '',
    storyStructure: '',
    genre: '',
    specifyEra: '',
  });
  const [duration, setDuration] = useState('30');

  const handleNewProject = () => {
    setShowCreateModal(true);
    setSelectedType(null);
    setFormData({
      title: '',
      numberOfCharacters: '',
      plotSummary: '',
      additionalInfo: '',
      toneOfStory: '',
      storyStructure: '',
      genre: '',
      specifyEra: '',
    });
  };

  const handleTypeSelect = (type: 'episodic' | 'oneshot') => {
    setSelectedType(type);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        coverImage: file
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to CreateCharacter component
    navigate('/character');
    setShowCreateModal(false);
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
            
            <div className="relative bg-black rounded-lg max-w-3xl w-full p-6 overflow-hidden">
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

              {!selectedType ? (
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-colors group"
                    onClick={() => handleTypeSelect('episodic')}
                  >
                    <PenSquare className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-3" />
                    <span className="text-white font-medium">Episodic Story</span>
                    <span className="text-gray-400 text-sm">(with multiple chapters)</span>
                  </button>

                  <button
                    className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-colors group"
                    onClick={() => handleTypeSelect('oneshot')}
                  >
                    <PenSquare className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-3" />
                    <span className="text-white font-medium">One-shot Story</span>
                    <span className="text-gray-400 text-sm">(single chapter)</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Novel Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Number of Characters *
                      </label>
                      <input
                        type="number"
                        name="numberOfCharacters"
                        value={formData.numberOfCharacters}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Plot Summary *
                      </label>
                      <textarea
                        name="plotSummary"
                        value={formData.plotSummary}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Tone of the Story *
                      </label>
                      <input
                        type="text"
                        name="toneOfStory"
                        value={formData.toneOfStory}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Story Structure *
                      </label>
                      <input
                        type="text"
                        name="storyStructure"
                        value={formData.storyStructure}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Genre *
                      </label>
                      <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Specify the Era *
                      </label>
                      <input
                        type="text"
                        name="specifyEra"
                        value={formData.specifyEra}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Cover Image
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-lg">
                      <div className="space-y-1 text-center">
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-400">
                          <label className="relative cursor-pointer bg-black rounded-md font-medium text-blue-500 hover:text-blue-400">
                            <span>Upload a file</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-400">
                          PNG, JPG up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Generation Duration
                    </label>
                    <div className="flex space-x-4">
                      {['30', '45', '60'].map((seconds) => (
                        <button
                          key={seconds}
                          type="button"
                          onClick={() => setDuration(seconds)}
                          className={`px-4 py-2 rounded-lg ${
                            duration === seconds
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          {seconds} seconds
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 mt-8">
                    <button
                      type="button"
                      onClick={() => setSelectedType(null)}
                      className="px-4 py-2 text-gray-300 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Generate Text
                    </button>
                  </div>
                </form>
              )}
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