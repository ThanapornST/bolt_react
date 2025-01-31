import React from 'react';
import { X } from 'lucide-react';

interface CharacterInfoProps {
  onClose: () => void;
}

export function CharacterInfo({ onClose }: CharacterInfoProps) {
  return (
    <div className="flex-1 bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Character Information</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Character Name
            </label>
            <input
              type="text"
              className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter character name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Character Description
            </label>
            <textarea
              className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              placeholder="Describe your character"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Character Role
            </label>
            <select className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select role</option>
              <option value="protagonist">Protagonist</option>
              <option value="antagonist">Antagonist</option>
              <option value="supporting">Supporting Character</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}