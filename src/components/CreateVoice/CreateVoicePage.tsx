import React, { useState } from 'react';
import { ArrowLeft, Mic, Play, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateVoicePage = () => {
  const navigate = useNavigate();
  const [recording, setRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="ml-4 text-xl font-semibold">Create Voice</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Record or Upload Your Voice</h2>
            <p className="text-gray-600">Create your unique voice for the story narration</p>
          </div>

          {/* Record Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Record Voice</h3>
            <div className="flex justify-center">
              <button
                onClick={() => setRecording(!recording)}
                className={`p-8 rounded-full ${
                  recording ? 'bg-red-500' : 'bg-blue-500'
                } text-white hover:opacity-90 transition-opacity`}
              >
                <Mic className="w-8 h-8" />
              </button>
            </div>
            {recording && (
              <p className="text-center mt-4 text-red-500">Recording in progress...</p>
            )}
          </div>

          {/* Upload Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Upload Audio File</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
              <div className="text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Drag and drop your audio file here, or click to browse
                </p>
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="audio-upload"
                />
                <label
                  htmlFor="audio-upload"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Choose File
                </label>
              </div>
            </div>
            {audioFile && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{audioFile.name}</span>
                  <button className="p-2 text-blue-500 hover:text-blue-600">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button className="w-full mt-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Create Voice
          </button>
        </div>
      </main>
    </div>
  );
};

export default CreateVoicePage;