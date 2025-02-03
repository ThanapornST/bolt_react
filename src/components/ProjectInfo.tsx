import React, { useState } from 'react';
import { X, Upload, Plus } from 'lucide-react';

interface ProjectInfoProps {
  onClose: () => void;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ onClose }) => {
  const [coverImage, setCoverImage] = useState<string>('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=228&q=80');
  const [characters, setCharacters] = useState([
    { id: 1, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'ตัวละครที่ 1' },
    { id: 2, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'ตัวละครที่ 2' },
    { id: 3, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', name: 'ตัวละครที่ 3' },
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 bg-[#0B1120] text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">นิยาย</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-lg border border-white hover:bg-gray-800">
              SAVE
            </button>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* Cover Image Section */}
          <div className="relative">
            <div className="aspect-[16/9] bg-[#1E293B] rounded-lg overflow-hidden">
              {coverImage ? (
                <img
                  src={coverImage}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">No image selected</span>
                </div>
              )}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <label className="px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 flex items-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>อัพโหลดรูปภาพ</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            <div className="mt-2 text-center text-sm text-gray-400">
              รองรับไฟล์ JPG, PNG และ GIF ขนาดไม่เกิน 2MB
            </div>
          </div>

          {/* Title Section */}
          <div>
            <label className="block text-sm font-medium mb-2">ชื่อเรื่อง</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-[#1E293B] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
              placeholder="ใส่ชื่อเรื่องของคุณ"
            />
          </div>

          {/* Description Section */}
          <div>
            <label className="block text-sm font-medium mb-2">คำอธิบาย</label>
            <textarea
              className="w-full px-4 py-3 bg-[#1E293B] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 text-gray-100"
              placeholder="คำอธิบายนิยาย"
            />
          </div>

          {/* Category Section */}
          <div>
            <label className="block text-sm font-medium mb-2">หมวดหมู่นิยาย</label>
            <select className="w-full px-4 py-3 bg-[#1E293B] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100">
              <option value="">เลือกหมวดหมู่</option>
              <option value="fantasy">แฟนตาซี</option>
              <option value="romance">โรแมนติก</option>
              <option value="action">แอคชั่น</option>
              <option value="horror">สยองขวัญ</option>
            </select>
          </div>

          {/* Characters Section */}
          <div>
            <label className="block text-sm font-medium mb-4">ตัวละครทั้งหมด</label>
            <div className="flex items-center space-x-6">
              {characters.map((character) => (
                <div key={character.id} className="text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-400">{character.name}</span>
                </div>
              ))}
              <button className="w-16 h-16 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-500">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};