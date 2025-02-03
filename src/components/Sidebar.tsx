import React from 'react';
import { Home, BookOpen, Mic, Sparkles, Plus, Settings } from 'lucide-react';

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
  const chapters = Array.from({ length: 2 }, (_, i) => i + 1);

  return (
    <div className="w-64 bg-black text-gray-300 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 flex items-center space-x-2">
        <BookOpen className="w-6 h-6 text-emerald-500" />
        <span className="text-xl font-semibold text-white">WriteWhisper</span>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4">
        <div className="space-y-1">
          <button
            onClick={() => handleNavigation('home')}
            className={`w-full flex items-center space-x-3 p-2 rounded-lg ${
              activeView === 'home' ? 'text-emerald-500' : 'hover:bg-gray-900'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>หน้าหลัก</span>
          </button>

          <button
            onClick={() => handleNavigation('project')}
            className={`w-full flex items-center space-x-3 p-2 rounded-lg ${
              activeView === 'project' ? 'text-emerald-500' : 'hover:bg-gray-900'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>ข้อมูลProjects</span>
          </button>

          <button
            onClick={() => handleNavigation('voice')}
            className={`w-full flex items-center space-x-3 p-2 rounded-lg ${
              activeView === 'voice' ? 'text-emerald-500' : 'hover:bg-gray-900'
            }`}
          >
            <Mic className="w-5 h-5" />
            <span>สร้างเสียงตัวละคร</span>
          </button>

          <button
            onClick={() => handleNavigation('ai')}
            className={`w-full flex items-center space-x-3 p-2 rounded-lg ${
              activeView === 'ai' ? 'text-emerald-500' : 'hover:bg-gray-900'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span>AI สร้างนิยาย</span>
          </button>
        </div>

        {/* Chapters Section */}
        <div className="mt-8">
          <div className="px-2 text-sm font-semibold text-gray-400">ตอนทั้งหมด</div>
          <div className="mt-2 space-y-1">
            {chapters.map((chapter) => (
              <button
                key={chapter}
                onClick={() => setSelectedChapter(chapter)}
                className={`w-full flex items-center p-2 rounded-lg ${
                  selectedChapter === chapter ? 'text-emerald-500' : 'hover:bg-gray-900'
                }`}
              >
                <span>ตอนที่ {chapter} ยังไม่มีชื่อ</span>
              </button>
            ))}
          </div>
          
          {/* Add New Chapter Button */}
          <button className="w-full flex items-center space-x-2 p-2 text-emerald-500 hover:bg-gray-900 rounded-lg mt-2">
            <Plus className="w-5 h-5" />
            <span>เพิ่มตอนใหม่</span>
          </button>
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="text-sm font-medium text-gray-200">นามปากกา : marisa</div>
              <div className="text-xs text-gray-400">Point : 2000 pt</div>
            </div>
          </div>
          <button
            onClick={() => handleNavigation('settings')}
            className="p-1.5 hover:bg-gray-800 rounded-lg"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};