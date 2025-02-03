/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { X, Upload, Plus } from "lucide-react";

interface ProjectInfoProps {
  onClose: () => void;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ onClose }) => {
  const [coverImage, setCoverImage] = useState<string>(
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=228&q=80"
  );
  const [characters] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "ตัวละครที่ 1",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "ตัวละครที่ 2",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "ตัวละครที่ 3",
    },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* รูปภาพ */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden bg-gray-200">
              {coverImage ? (
                <img
                  src={coverImage}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image selected
                </div>
              )}
            </div>

            {/* ปุ่มอัปโหลดรูป */}
            <label className="mt-3 w-full px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-blue-600 flex items-center justify-center space-x-2">
              <Upload className="w-5 h-5" />
              <span>อัพโหลดรูปภาพ</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {/* คำอธิบายขนาดไฟล์ */}
            <p className="mt-2 text-center text-sm text-gray-400">
              รองรับไฟล์ JPG, PNG และ GIF ขนาดไม่เกิน 2MB
            </p>
          </div>

          {/* ฟอร์ม (ขยับไปทางขวา) */}
          <div className="col-span-2 space-y-4 ml-auto w-3/4">
            {/* ชื่อเรื่อง */}
            <div>
              <label className="block text-sm font-medium mb-2">
                ชื่อเรื่อง
              </label>
              <input
                type="text"
                className="w-full max-w-lg px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="ใส่ชื่อเรื่องของคุณ"
              />
            </div>

            {/* คำอธิบาย */}
            <div>
              <label className="block text-sm font-medium mb-2">คำอธิบาย</label>
              <textarea
                className="w-full max-w-lg px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 h-24 text-black placeholder-gray-400"
                placeholder="คำอธิบายนิยาย"
              />
            </div>

            {/* หมวดหมู่นิยาย */}
            <div>
              <label className="block text-sm font-medium mb-2">
                หมวดหมู่นิยาย
              </label>
              <select className="w-full max-w-lg px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-gray-800">
                <option className="text-gray-400">เลือกหมวดหมู่</option>
                <option className="text-black" value="romance">
                  โรแมนติก
                </option>
                <option className="text-black" value="fantasy">
                  แฟนตาซี
                </option>
                <option className="text-black" value="action">
                  แอคชั่น
                </option>
                <option className="text-black" value="horror">
                  สยองขวัญ
                </option>
                <option className="text-black" value="comedy">
                  ตลก
                </option>
              </select>
            </div>
          </div>

          {/* Characters Section */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ตัวละครทั้งหมด
            </label>
            <div className="flex space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop"
                      alt={`Character ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-sm">ตัวละครที่ {i}</p>
                </div>
              ))}
              {/* ปุ่มเพิ่มตัวละคร */}
              <button className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <Plus className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
