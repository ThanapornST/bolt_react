import React, { useState } from 'react';
import { BookText, LogOut, PlusCircle, ScrollText, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  label: string;
  items?: string[];
}

interface SidebarProps {
  onNewProject: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNewProject }) => {
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
    Novel: true,
    Create: true
  });

  const menuItems: MenuItem[] = [
    {
      label: "Novel",
      items: ["Novel 1", "Novel 2"]
    },
    {
      label: "Create",
      items: ["Journal", "Diary", "Finish", "New Form", "AI"]
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <div className="w-64 bg-black text-white h-full p-4 sm:p-6 flex flex-col">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold">Write</h1>
        <div className="h-0.5 w-16 bg-blue-500 mt-1"></div>
        <h2 className="text-base sm:text-lg text-gray-400">Whisper</h2>
      </div>

      <button 
        onClick={onNewProject}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-3 sm:px-4 flex items-center justify-center transition-colors mb-4"
      >
        <PlusCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        New Project
      </button>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label} className="mb-2">
              <button
                onClick={() => toggleExpand(item.label)}
                className="w-full flex items-center justify-between text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg p-2 sm:p-3 transition-colors"
              >
                <span className="flex items-center">
                  {item.label === "Novel" ? (
                    <BookText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  ) : (
                    <ScrollText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  )}
                  <span className="text-sm sm:text-base">{item.label}</span>
                </span>
                {expandedItems[item.label] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedItems[item.label] && item.items && (
                <ul className="ml-6 sm:ml-8 mt-1 space-y-1">
                  {item.items.map((subItem) => (
                    <li key={subItem}>
                      <button className="w-full text-left text-gray-400 hover:text-white p-1.5 sm:p-2 rounded-lg hover:bg-gray-800 transition-colors text-xs sm:text-sm">
                        {subItem}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button 
        onClick={handleLogout}
        className="w-full flex items-center text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg p-2 sm:p-3 transition-colors mt-auto"
      >
        <LogOut className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
        <span className="text-sm sm:text-base">Log Out</span>
      </button>
    </div>
  );
};

export default Sidebar;