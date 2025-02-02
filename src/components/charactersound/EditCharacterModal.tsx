import React, { useState } from 'react';
import { Star, X, Volume2, Download } from 'lucide-react';
import { Character } from '../types/character';


interface EditCharacterModalProps {
  isNew?: boolean;
  character: Character;
  onClose: () => void;
  onSave: (id: number, updates: Partial<Character>) => void;
}

export function EditCharacterModal({ 
  character, 
  onClose, 
  onSave 
}: EditCharacterModalProps) {
  const [editName, setEditName] = useState(character.name);
  const [editStatus, setEditStatus] = useState(character.status);
  const [isStarred, setIsStarred] = useState(character.isStarred);

  const handleSave = () => {
    onSave(character.id, {
      name: editName,
      status: editStatus,
      isStarred
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-[#1a1f2e] rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">สร้างเสียงตัวละคร</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mb-8 relative">
          <div className="w-24 h-24 bg-[#2a2f3e] rounded-full flex items-center justify-center">
            <span className="text-gray-400 text-2xl">
              ชื่อ
            </span>
          </div>
          <button 
            onClick={() => setIsStarred(!isStarred)}
            className="absolute -top-2 -right-2"
          >
            <Star className={`w-6 h-6 ${isStarred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
          </button>
          <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
            <Download className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">ชื่อตัวละคร</label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="w-full bg-[#2a2f3e] rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="ระบุชื่อตัวละคร"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">บทบาทตัวละคร</label>
            <input
              type="text"
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)}
              className="w-full bg-[#2a2f3e] rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              placeholder="บทบาท"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">เลือกเสียงตัวละคร</label>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  className="flex items-center justify-center space-x-2 bg-[#2a2f3e] rounded-lg px-4 py-3 text-gray-300 hover:bg-[#3a3f4e] border border-gray-700"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>เสียงที่ {num}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">คำอธิบายเพิ่มเติม</label>
            <textarea
              className="w-full bg-[#2a2f3e] rounded-lg px-4 py-3 text-white border border-gray-700 focus:border-blue-500 focus:outline-none h-24 resize-none"
              placeholder="NO NAME"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg text-gray-300 hover:text-white border border-gray-700 hover:bg-[#2a2f3e]"
          >
            ยกเลิก
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}