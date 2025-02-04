import React, { useState } from 'react';
import { Home, BookOpen, Mic, Sparkles, Plus, Edit2, Check, X, Moon, Sun } from 'lucide-react';
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
    <div className="w-64 bg-theme-secondary dark:bg-dark-secondary text-theme-secondary dark:text-dark-text flex flex-col h-screen transition-theme">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-700/10 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-emerald-500" />
          <span className="text-xl font-semibold text-theme-primary dark:text-dark-text">WriteWhisper</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {[
            { icon: Home, label: 'หน้าหลัก', view: 'home' },
            { icon: BookOpen, label: 'ข้อมูลProjects', view: 'project' },
            { icon: Mic, label: 'สร้างเสียงตัวละคร', view: 'voice' },
            { icon: Sparkles, label: 'AI สร้างนิยาย', view: 'ai' }
          ].map(({ icon: Icon, label, view }) => (
            <button
              key={view}
              onClick={() => handleNavigation(view)}
              className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                activeView === view 
                  ? 'text-emerald-500 bg-theme-primary dark:bg-dark-primary' 
                  : 'text-theme-primary dark:text-dark-text hover:bg-theme-primary dark:hover:bg-dark-primary/50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Chapters Section */}
        <div className="mt-8">
          <div className="px-2 text-sm font-semibold text-theme-secondary dark:text-dark-text/70">ตอนทั้งหมด</div>
          <div className="mt-2 space-y-1">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="group relative">
                {chapter.isEditing ? (
                  <div className="flex items-center p-2 space-x-2">
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      className="flex-1 bg-theme-primary dark:bg-dark-primary text-theme-primary dark:text-dark-text rounded px-2 py-1 text-sm border border-gray-300 dark:border-gray-600"
                      autoFocus
                    />
                    <button
                      onClick={() => saveChapterTitle(chapter.id)}
                      className="p-1 hover:bg-theme-primary dark:hover:bg-dark-primary rounded"
                    >
                      <Check className="w-4 h-4 text-emerald-500" />
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="p-1 hover:bg-theme-primary dark:hover:bg-dark-primary rounded"
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedChapter(chapter.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                      selectedChapter === chapter.id 
                        ? 'text-emerald-500 bg-theme-primary dark:bg-dark-primary' 
                        : 'text-theme-primary dark:text-dark-text hover:bg-theme-primary dark:hover:bg-dark-primary/50'
                    }`}
                  >
                    <span className="truncate">{chapter.title}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        startEditing(chapter);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-theme-primary dark:hover:bg-dark-primary rounded"
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
            className="w-full flex items-center space-x-2 p-2 text-emerald-500 hover:bg-theme-primary dark:hover:bg-dark-primary rounded-lg mt-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>เพิ่มตอนใหม่</span>
          </button>
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-700/10 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="text-sm font-medium text-theme-primary dark:text-dark-text">นามปากกา : marisa</div>
              <div className="text-xs text-theme-secondary dark:text-dark-text/70">Point : 2000 pt</div>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-theme-primary dark:hover:bg-dark-primary transition-colors"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-blue-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};