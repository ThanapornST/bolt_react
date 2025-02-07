import React, { useState } from "react";

interface EditorHeaderProps {
  wordCount: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const EditorHeader: React.FC<EditorHeaderProps> = ({ wordCount }) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<{ [key: number]: boolean }>({
    1: true,
    2: false,
  });

  const [open, setOpen] = useState(false);
  const [characterData, setCharacterData] = useState({
    name: "Character 1",
    role: "บทบาท",
    description: "NO NAME",
    selectedVoice: 1,
    avatar: "" // รูปโปรไฟล์
  });

  const toggleFavorite = (id: number) => {
    setFavoriteCharacters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleChange = (field: string, value: string | number) => {
    setCharacterData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCharacterData((prev) => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-screen w-full bg-black text-white p-8 flex flex-col">
      <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
        <h1 className="text-2xl font-semibold">ตัวละครทั้งหมด</h1>
        <button className="px-6 py-3 text-sm bg-gray-800 text-white rounded-md hover:bg-gray-700">
          เพิ่มเสียงตัวละคร
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 justify-start flex-1 overflow-y-auto p-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center w-44 h-52 relative"
          >
            <div className="relative w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
              {characterData.avatar ? (
                <img src={characterData.avatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
              ) : (
                <span className="text-gray-400 text-lg">{characterData.name}</span>
              )}
            </div>

            <p className="text-gray-400 text-sm mt-2">{characterData.role}</p>

            <button 
              className="mt-2 text-gray-500 hover:text-white text-sm flex items-center space-x-1"
              onClick={() => setOpen(true)}
            >
              <span>✏️</span>
              <span>แก้ไข</span>
            </button>

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
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg w-96 border border-gray-700 relative">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={() => setOpen(false)}>
              ✖
            </button>
            <h2 className="text-lg font-bold mb-4">สร้างเสียงตัวละคร</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <label className="relative w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
                  {characterData.avatar ? (
                    <img src={characterData.avatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <span className="text-gray-400 text-lg">อัพโหลดรูป</span>
                  )}
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
              <div>
                <label className="text-gray-400 text-sm">ชื่อตัวละคร</label>
                <input className="w-full bg-gray-800 text-white p-2 rounded mt-1 border border-gray-600" 
                  value={characterData.name} 
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm">บทบาทตัวละคร</label>
                <input className="w-full bg-gray-800 text-white p-2 rounded mt-1 border border-gray-600" 
                  value={characterData.role} 
                  onChange={(e) => handleChange("role", e.target.value)}
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm">คำอธิบายเพิ่มเติม</label>
                <textarea className="w-full bg-gray-800 text-white p-2 rounded mt-1 border border-gray-600" 
                  value={characterData.description} 
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500" onClick={() => setOpen(false)}>
                ยกเลิก
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => setOpen(false)}>
                บันทึก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
