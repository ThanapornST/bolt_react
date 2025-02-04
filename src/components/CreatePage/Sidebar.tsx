import React, { useState } from 'react';
import { Home, BookOpen, Mic, Sparkles, Plus, Edit2, Check, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface SidebarProps {
  onNewProject: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNewProject }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
    Novel: true,
    Create: true
  });

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <div className={`w-64 h-full flex flex-col ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-800'
    } transition-colors duration-200`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-blue-500" />
          <h1 className="text-xl font-bold text-white">WriteWhisper</h1>
        </div>
      </div>

      {/* New Project Button */}
      <div className="p-4">
        <button 
          onClick={onNewProject}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 flex items-center justify-center transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          <span>New Project</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 overflow-y-auto">
        <div className="space-y-4">
          {[
            { icon: Home, label: 'หน้าหลัก', view: 'home' },
            { icon: BookOpen, label: 'ข้อมูลProjects', view: 'project' },
            { icon: Mic, label: 'สร้างเสียงตัวละคร', view: 'voice' },
            { icon: Sparkles, label: 'AI สร้างนิยาย', view: 'ai' }
          ].map(({ icon: Icon, label, view }) => (
            <button
              key={view}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Chapters Section */}
        <div className="mt-8">
          <h3 className="px-3 text-sm font-medium text-gray-400 uppercase">ตอนทั้งหมด</h3>
          <div className="mt-2 space-y-1">
            {['จุดเริ่มต้นของการเดินทาง', 'ความลับที่ถูกซ่อนไว้'].map((chapter, index) => (
              <button
                key={index}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span>{chapter}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* User Profile and Dark Mode Toggle */}
      <div className={`p-4 border-t border-gray-700 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-800'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="text-sm font-medium text-white">นามปากกา : marisa</div>
              <div className="text-xs text-gray-400">Point : 2000 pt</div>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'hover:bg-gray-800 text-yellow-500'
                : 'hover:bg-gray-700 text-blue-500'
            }`}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;