import React from 'react';
import { BookOpen, Settings, Users, Home } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  selectedChapter: number;
  handleNavigation: (view: string) => void;
  setSelectedChapter: (chapter: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  selectedChapter,
  handleNavigation,
  setSelectedChapter,
}) => {
  const chapters = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-4">
        <h1 className="text-xl font-bold">Story Editor</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <button
          onClick={() => handleNavigation('home')}
          className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
            activeView === 'home' ? 'bg-blue-500' : 'hover:bg-gray-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => handleNavigation('project')}
          className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
            activeView === 'project' ? 'bg-blue-500' : 'hover:bg-gray-800'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span>Project Info</span>
        </button>

        <button
          onClick={() => handleNavigation('character')}
          className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
            activeView === 'character' ? 'bg-blue-500' : 'hover:bg-gray-800'
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Characters</span>
        </button>

        <button
          onClick={() => handleNavigation('settings')}
          className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
            activeView === 'settings' ? 'bg-blue-500' : 'hover:bg-gray-800'
          }`}
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>

        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">Chapters</h2>
          <div className="space-y-1">
            {chapters.map((chapter) => (
              <button
                key={chapter}
                onClick={() => setSelectedChapter(chapter)}
                className={`w-full text-left p-2 rounded-lg ${
                  selectedChapter === chapter
                    ? 'bg-blue-500'
                    : 'hover:bg-gray-800'
                }`}
              >
                Chapter {chapter}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};