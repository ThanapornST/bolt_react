import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

interface Character {
  id?: number;
  name?: string;
  description?: string;
  avatar?: string;
  isFavorite?: boolean;
  voice?: number | null;
}

interface CharacterEditModalProps {
  onClose: () => void;
  character?: Character | null;
}

export function CharacterEditModal({ onClose, character = null }: CharacterEditModalProps) {
  const [name, setName] = useState(character?.name || '');
  const [description, setDescription] = useState(character?.description || '');
  const [avatar, setAvatar] = useState(character?.avatar || '');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black border border-gray-800 rounded-lg p-6 w-[400px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">สร้างเสียงตัวละคร</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden mb-2">
              {avatar ? (
                <img src={avatar} alt="Character" className="w-full h-full object-cover" />
              ) : (
                <div className="text-gray-400 text-4xl">ชื่อ</div>
              )}
            </div>
            <label className="flex items-center space-x-2 text-gray-400 cursor-pointer hover:text-white">
              <Upload className="w-4 h-4" />
              <span>Upload</span>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>

          {/* Character Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">ชื่อตัวละคร</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="ระบุชื่อตัวละคร"
            />
          </div>

          {/* Character Description */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">บทบาทตัวละคร</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="บทบาท"
            />
          </div>

          {/* Additional Description */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">คำอธิบายเพิ่มเติม</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700 focus:outline-none focus:border-blue-500 min-h-[100px]"
              placeholder="NO NAME"
            />
          </div>

          {/* Save Button */}
          <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            เพิ่มตัวละคร
          </button>
        </div>
      </div>
    </div>
  );
}