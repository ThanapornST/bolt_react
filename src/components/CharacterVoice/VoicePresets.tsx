import React from 'react';
import { Save, Trash2 } from 'lucide-react';

interface VoicePreset {
  id: number;
  name: string;
  pitch: number;
  speed: number;
  emotion: string;
}

interface VoicePresetsProps {
  presets: VoicePreset[];
  onSelectPreset: (preset: VoicePreset) => void;
  onDeletePreset: (presetId: number) => void;
  onSavePreset: (name: string) => void;
}

export function VoicePresets({
  presets,
  onSelectPreset,
  onDeletePreset,
  onSavePreset
}: VoicePresetsProps) {
  const [newPresetName, setNewPresetName] = React.useState('');

  const handleSavePreset = () => {
    if (newPresetName.trim()) {
      onSavePreset(newPresetName);
      setNewPresetName('');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-4">ชุดเสียงที่บันทึกไว้</h3>

      <div className="space-y-4">
        {presets.map((preset) => (
          <div
            key={preset.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
          >
            <button
              onClick={() => onSelectPreset(preset)}
              className="flex-1 text-left"
            >
              <span className="font-medium text-gray-900">{preset.name}</span>
              <div className="text-sm text-gray-500">
                ระดับเสียง: {preset.pitch}, ความเร็ว: {preset.speed}, อารมณ์: {preset.emotion}
              </div>
            </button>
            <button
              onClick={() => onDeletePreset(preset.id)}
              className="p-2 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}

        <div className="flex space-x-2">
          <input
            type="text"
            value={newPresetName}
            onChange={(e) => setNewPresetName(e.target.value)}
            placeholder="ชื่อชุดเสียงใหม่"
            className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSavePreset}
            className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>บันทึก</span>
          </button>
        </div>
      </div>
    </div>
  );
}