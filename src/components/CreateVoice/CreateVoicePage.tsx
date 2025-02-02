import React, { useState } from 'react';
import { Sidebar } from '../Character/Sidebar';
import { VoiceSettings } from '../CharacterVoice/VoiceSettings';
import { VoiceRecorder } from '../CharacterVoice/VoiceRecorder';
import { VoicePresets } from '../CharacterVoice/VoicePresets';

const CreateVoicePage = () => {
  const [pitch, setPitch] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [emotion, setEmotion] = useState('normal');
  const [voicePresets, setVoicePresets] = useState([
    { id: 1, name: 'Default Voice', pitch: 50, speed: 50, emotion: 'normal' },
    { id: 2, name: 'Happy Voice', pitch: 60, speed: 55, emotion: 'happy' }
  ]);

  const handleSaveVoice = (audioUrl: string) => {
    console.log('Saving voice:', audioUrl);
  };

  const handleSelectPreset = (preset: any) => {
    setPitch(preset.pitch);
    setSpeed(preset.speed);
    setEmotion(preset.emotion);
  };

  const handleDeletePreset = (presetId: number) => {
    setVoicePresets(voicePresets.filter(p => p.id !== presetId));
  };

  const handleSavePreset = (name: string) => {
    const newPreset = {
      id: voicePresets.length + 1,
      name,
      pitch,
      speed,
      emotion
    };
    setVoicePresets([...voicePresets, newPreset]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onShowProjectInfo={() => {}} />
      
      <div className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">สร้างเสียงตัวละคร</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">ตัวละคร</h2>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop"
                    alt="Character"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">MiCael</h3>
                    <p className="text-sm text-gray-500">ตัวละครหลัก</p>
                  </div>
                </div>
              </div>

              <VoiceSettings
                pitch={pitch}
                speed={speed}
                emotion={emotion}
                onPitchChange={setPitch}
                onSpeedChange={setSpeed}
                onEmotionChange={setEmotion}
              />

              <VoiceRecorder onSave={handleSaveVoice} />
            </div>

            <div className="space-y-6">
              <VoicePresets
                presets={voicePresets}
                onSelectPreset={handleSelectPreset}
                onDeletePreset={handleDeletePreset}
                onSavePreset={handleSavePreset}
              />

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">ตัวอย่างเสียง</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      "สวัสดี ฉันชื่อ MiCael ยินดีที่ได้รู้จัก"
                    </p>
                    <button className="text-blue-500 text-sm hover:underline">
                      ฟังตัวอย่าง
                    </button>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      "วันนี้อากาศดีจังเลย ไปเดินเล่นกันไหม?"
                    </p>
                    <button className="text-blue-500 text-sm hover:underline">
                      ฟังตัวอย่าง
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateVoicePage;