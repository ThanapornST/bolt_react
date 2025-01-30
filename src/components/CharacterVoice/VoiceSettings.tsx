import React from 'react';
import { Volume2, Music, Wand2 } from 'lucide-react';

interface VoiceSettingsProps {
  pitch: number;
  speed: number;
  emotion: string;
  onPitchChange: (value: number) => void;
  onSpeedChange: (value: number) => void;
  onEmotionChange: (value: string) => void;
}

export function VoiceSettings({
  pitch,
  speed,
  emotion,
  onPitchChange,
  onSpeedChange,
  onEmotionChange
}: VoiceSettingsProps) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-4">ตั้งค่าเสียงตัวละคร</h3>
      
      <div className="space-y-4">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Volume2 className="w-4 h-4 mr-2" />
            ระดับเสียง
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={pitch}
            onChange={(e) => onPitchChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Music className="w-4 h-4 mr-2" />
            ความเร็วเสียง
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={speed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Wand2 className="w-4 h-4 mr-2" />
            อารมณ์เสียง
          </label>
          <select
            value={emotion}
            onChange={(e) => onEmotionChange(e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
          >
            <option value="normal">ปกติ</option>
            <option value="happy">มีความสุข</option>
            <option value="sad">เศร้า</option>
            <option value="angry">โกรธ</option>
            <option value="excited">ตื่นเต้น</option>
          </select>
        </div>
      </div>
    </div>
  );
}