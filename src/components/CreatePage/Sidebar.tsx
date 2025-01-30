import React, { useState } from 'react';
import {  BookText, LogOut, PlusCircle, ScrollText, ChevronDown, ChevronRight } from 'lucide-react';

interface MenuItem {
  label: string;
  items?: string[];
}

const Sidebar = () => {
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

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <div className="w-64 bg-black text-white h-screen p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Write</h1>
        <div className="h-0.5 w-16 bg-blue-500 mt-1"></div>
        <h2 className="text-lg text-gray-400">Whisper</h2>
      </div>

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 flex items-center justify-center transition-colors mb-4">
        <PlusCircle className="w-5 h-5 mr-2" />
        New Project
      </button>

      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label} className="mb-2">
              <button
                onClick={() => toggleExpand(item.label)}
                className="w-full flex items-center justify-between text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg p-3 transition-colors"
              >
                <span className="flex items-center">
                  {item.label === "Novel" ? (
                    <BookText className="w-5 h-5 mr-3" />
                  ) : (
                    <ScrollText className="w-5 h-5 mr-3" />
                  )}
                  {item.label}
                </span>
                {expandedItems[item.label] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedItems[item.label] && item.items && (
                <ul className="ml-8 mt-1 space-y-1">
                  {item.items.map((subItem) => (
                    <li key={subItem}>
                      <button className="w-full text-left text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
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

      <button className="w-full flex items-center text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg p-3 transition-colors mt-auto">
        <LogOut className="w-5 h-5 mr-3" />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;