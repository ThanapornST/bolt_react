import React from 'react';
import { Heart, Users, Map, Calendar } from 'lucide-react';

interface BackgroundInfoProps {
  onSave: (data: {
    relationships: string;
    birthplace: string;
    birthday: string;
    likes: string;
    dislikes: string;
    goals: string;
  }) => void;
}

export function BackgroundInfo({ onSave }: BackgroundInfoProps) {
  const [relationships, setRelationships] = React.useState('');
  const [birthplace, setBirthplace] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [likes, setLikes] = React.useState('');
  const [dislikes, setDislikes] = React.useState('');
  const [goals, setGoals] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      relationships,
      birthplace,
      birthday,
      likes,
      dislikes,
      goals
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Users className="w-4 h-4 mr-2" />
          ความสัมพันธ์กับตัวละครอื่น
        </label>
        <textarea
          value={relationships}
          onChange={(e) => setRelationships(e.target.value)}
          className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 min-h-[100px]"
          placeholder="อธิบายความสัมพันธ์กับตัวละครอื่นๆ"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Map className="w-4 h-4 mr-2" />
            สถานที่เกิด
          </label>
          <input
            type="text"
            value={birthplace}
            onChange={(e) => setBirthplace(e.target.value)}
            className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            วันเกิด
          </label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <Heart className="w-4 h-4 mr-2" />
          สิ่งที่ชอบ/ไม่ชอบ
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            placeholder="สิ่งที่ชอบ"
            className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            value={dislikes}
            onChange={(e) => setDislikes(e.target.value)}
            placeholder="สิ่งที่ไม่ชอบ"
            className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          เป้าหมายในชีวิต
        </label>
        <textarea
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 min-h-[100px]"
          placeholder="เป้าหมายและความฝันของตัวละคร"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        บันทึกข้อมูล
      </button>
    </form>
  );
}