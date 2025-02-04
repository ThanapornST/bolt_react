import React, { useState } from 'react';
import { Home, BookOpen, Mic, Sparkles, Plus, Settings, Edit2, Check, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SidebarProps {
  activeView: string;
  selectedChapter: number;
  handleNavigation: (view: string) => void;
  setSelectedChapter: (chapter: number) => void;
}

interface Chapter {
  id: number;
  title: string;
  isEditing: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  selectedChapter,
  handleNavigation,
  setSelectedChapter,
}) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [chapters, setChapters] = useState<Chapter[]>([
    { id: 1, title: 'จุดเริ่มต้นของการเดินทาง', isEditing: false },
    { id: 2, title: 'ความลับที่ถูกซ่อนไว้', isEditing: false }
  ]);
  const [editingTitle, setEditingTitle] = useState('');

  const startEditing = (chapter: Chapter) => {
    setChapters(chapters.map(c => ({
      ...c,
      isEditing: c.id === chapter.id
    })));
    setEditingTitle(chapter.title);
  };

  const saveChapterTitle = (chapterId: number) => {
    if (editingTitle.trim()) {
      setChapters(chapters.map(c => ({
        ...c,
        title: c.id === chapterId ? editingTitle : c.title,
        isEditing: false
      })));
    }
  };

  const cancelEditing = () => {
    setChapters(chapters.map(c => ({ ...c, isEditing: false })));
  };

  const addNewChapter = () => {
    const newChapter = {
      id: chapters.length + 1,
      title: `ตอนที่ ${chapters.length + 1}`,
      isEditing: false
    };
    setChapters([...chapters, newChapter]);
  };

  return (
    <div className="w-64 bg-black text-gray-300 flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-emerald-500" />
          <span className="text-xl font-semibold text-white">WriteWhisper</span>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-blue-500" />
          )}
        </button>
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
              <div key={chapter.id} className="group relative">
                {chapter.isEditing ? (
                  <div className="flex items-center p-2 space-x-2">
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      className="flex-1 bg-gray-800 text-white rounded px-2 py-1 text-sm"
                      autoFocus
                    />
                    <button
                      onClick={() => saveChapterTitle(chapter.id)}
                      className="p-1 hover:bg-gray-700 rounded"
                    >
                      <Check className="w-4 h-4 text-emerald-500" />
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="p-1 hover:bg-gray-700 rounded"
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedChapter(chapter.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg ${
                      selectedChapter === chapter.id ? 'text-emerald-500 bg-gray-800' : 'hover:bg-gray-900'
                    }`}
                  >
                    <span className="truncate">{chapter.title}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        startEditing(chapter);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-700 rounded"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </button>
                )}
              </div>
            ))}
          </div>
          
          {/* Add New Chapter Button */}
          <button 
            onClick={addNewChapter}
            className="w-full flex items-center space-x-2 p-2 text-emerald-500 hover:bg-gray-900 rounded-lg mt-2"
          >
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