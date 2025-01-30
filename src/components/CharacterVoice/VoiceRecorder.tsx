import React, { useState } from 'react';
import { Mic, Square, Play, Save } from 'lucide-react';

interface VoiceRecorderProps {
  onSave: (audioUrl: string) => void;
}

export function VoiceRecorder({ onSave }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const startRecording = () => {
    setIsRecording(true);
    // Add actual recording logic here
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Add stop recording logic here
    setAudioUrl('dummy-audio-url');
  };

  const playRecording = () => {
    // Add playback logic here
  };

  const handleSave = () => {
    if (audioUrl) {
      onSave(audioUrl);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-4">บันทึกเสียงตัวละคร</h3>
      
      <div className="flex items-center space-x-4">
        {isRecording ? (
          <button
            onClick={stopRecording}
            className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            <Square className="w-5 h-5" />
          </button>
        ) : (
          <button
            onClick={startRecording}
            className="p-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600"
          >
            <Mic className="w-5 h-5" />
          </button>
        )}
        
        {audioUrl && (
          <>
            <button
              onClick={playRecording}
              className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              <Play className="w-5 h-5" />
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>บันทึกเสียง</span>
            </button>
          </>
        )}
      </div>

      {isRecording && (
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded">
            <div className="h-2 bg-emerald-500 rounded animate-pulse" style={{ width: '60%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">กำลังบันทึกเสียง...</p>
        </div>
      )}
    </div>
  );
}