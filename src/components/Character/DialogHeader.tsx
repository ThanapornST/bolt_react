import React from 'react';
import { Languages, ExternalLink } from 'lucide-react';

interface DialogHeaderProps {
  wordCount: number;
}

export function DialogHeader({ wordCount }: DialogHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-900 text-xl">บทสนทนาของตัวละคร</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">{wordCount} คำ</span>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Languages className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <ExternalLink className="w-5 h-5" />
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              ส่งออก
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}