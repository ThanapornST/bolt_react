import React from 'react';
import { BookOpen, Home, Mic, Plus, Settings, Sparkles } from 'lucide-react';

interface CharacterSidebarProps {
  onShowCharacterInfo: () => void;
}

export function CharacterSidebar({ onShowCharacterInfo }: CharacterSidebarProps) {
  return (
    <div className="w-64 bg-black border-r border-gray-800">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <BookOpen className="w-6 h-6 text-emerald-500" />
          <span className="text-white text-xl font-semibold">WriteWhisper</span>
        </div>

        <nav className="space-y-2">
          <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg">
            <Home className="w-5 h-5 mr-3" />
            <span>หน้าหลัก</span>
          </a>
          <button 
            onClick={onShowCharacterInfo}
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg w-full"
          >
            <BookOpen className="w-5 h-5 mr-3" />
            <span>ข้อมูลตัวละคร</span>
          </button>
          <button className="flex items-center px-4 py-2 text-emerald-500 hover:bg-gray-800 rounded-lg w-full">
            <Mic className="w-5 h-5 mr-3" />
            <span>สร้างเสียงตัวละคร</span>
          </button>
          <button className="flex items-center px-4 py-2 text-emerald-500 hover:bg-gray-800 rounded-lg w-full">
            <Sparkles className="w-5 h-5 mr-3" />
            <span>AI สร้างบทสนทนา</span>
          </button>

          <div className="py-4">
            <div className="px-4 text-sm font-medium text-gray-400 mb-2">ตัวละครทั้งหมด</div>
            <button className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-lg w-full mb-2">
              <span>ตัวละครที่ 1: MiCael</span>
            </button>
            <button className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-lg w-full mb-2">
              <span>ตัวละครที่ 2: ยังไม่มีชื่อ</span>
            </button>
            <button className="flex items-center px-4 py-2 text-emerald-500 hover:bg-gray-800 rounded-lg w-full">
              <Plus className="w-4 h-4 mr-2" />
              <span>เพิ่มตัวละครใหม่</span>
            </button>
          </div>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 w-64 p-4 bg-black border-t border-gray-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
            <div>
              <div className="text-gray-300 text-sm">นามปากกา : marisa</div>
              <div className="text-gray-400 text-xs">Point : 2000 pt</div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-300">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}