import React, { useState } from "react";

interface EditorHeaderProps {
  wordCount: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const EditorHeader: React.FC<EditorHeaderProps> = ({ wordCount }) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<{ [key: number]: boolean }>({
    1: true, // ตัวอย่าง: เริ่มต้นให้ตัวแรกมีดาว
    2: false,
  });

  // ฟังก์ชันเปิด/ปิดดาว
  const toggleFavorite = (id: number) => {
    setFavoriteCharacters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="h-screen w-full bg-black text-white p-8 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
        <h1 className="text-2xl font-semibold">ตัวละครทั้งหมด</h1>
        <button className="px-6 py-3 text-sm bg-gray-800 text-white rounded-md hover:bg-gray-700">
          เพิ่มเสียงตัวละคร
        </button>
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-3 gap-6 justify-start flex-1 overflow-y-auto p-4">
        {/* Character Cards */}
        {[1, 2].map((i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center w-44 h-52 relative"
          >
            {/* Profile Image */}
            <div className="relative w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-lg">ชื่อ</span>
            </div>

            {/* Character Status */}
            <p className="text-gray-400 text-sm mt-2">สถานะ</p>

            {/* Edit Button */}
            <button className="mt-2 text-gray-500 hover:text-white text-sm flex items-center space-x-1">
              <span>✏️</span>
              <span>แก้ไข</span>
            </button>

            {/* Favorite Star (สามารถกดเปิด/ปิดได้) */}
            <div
              className={`absolute top-3 right-3 text-xl cursor-pointer ${
                favoriteCharacters[i] ? "text-yellow-400" : "text-gray-600"
              }`}
              onClick={() => toggleFavorite(i)}
            >
              ⭐
            </div>
          </div>
        ))}

        {/* Add New Character */}
        <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center w-44 h-52">
          <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-blue-500 text-3xl">+</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">เพิ่มตัวละคร</p>
        </div>
      </div>
    </div>
  );
};
