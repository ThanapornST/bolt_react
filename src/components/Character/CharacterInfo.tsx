import React, { useState } from 'react';
import {  Image as ImageIcon, Mic, Sparkles } from 'lucide-react';

interface CharacterInfoProps {
  onClose: () => void;
}

export function CharacterInfo({ onClose }: CharacterInfoProps) {
  const [name, setName] = useState('');
  const [personality, setPersonality] = useState('');
  const [description, setDescription] = useState('');
  const [characterImage, setCharacterImage] = useState('https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=600&fit=crop');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCharacterImage(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">สร้างตัวละคร</h1>
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            บันทึก
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Character Image */}
          <div className="col-span-1">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              {characterImage ? (
                <img
                  src={characterImage}
                  alt="Character avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <ImageIcon className="w-16 h-16 text-gray-400" />
                </div>
              )}
            </div>
            <label className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer">
              <ImageIcon className="w-5 h-5 mr-2" />
              <span>อัพโหลดรูปตัวละคร</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            <p className="text-gray-500 text-sm mt-2 text-center">
              รองรับไฟล์ JPG, PNG และ GIF ขนาดไม่เกิน 2MB
            </p>
          </div>

          {/* Form Fields */}
          <div className="col-span-2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ชื่อตัวละคร
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ชื่อตัวละคร"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                บุคลิกตัวละคร
              </label>
              <input
                type="text"
                value={personality}
                onChange={(e) => setPersonality(e.target.value)}
                className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="บุคลิกของตัวละคร เช่น ร่าเริง เงียบขรึม"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                รายละเอียดตัวละคร
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                placeholder="รายละเอียดเพิ่มเติมเกี่ยวกับตัวละคร"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                เสียงตัวละคร
              </label>
              <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                  <Mic className="w-5 h-5 mr-2" />
                  <span>บันทึกเสียง</span>
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Sparkles className="w-5 h-5 mr-2" />
                  <span>สร้างเสียงด้วย AI</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}