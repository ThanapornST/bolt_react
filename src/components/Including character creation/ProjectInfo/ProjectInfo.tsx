import React from 'react';
import { X } from 'lucide-react';

interface ProjectInfoProps {
  onClose: () => void;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ onClose }) => {
  return (
    <div className="flex-1 bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Project Information</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Project Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Project title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Genre</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Fantasy</option>
                <option>Science Fiction</option>
                <option>Mystery</option>
                <option>Romance</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Synopsis</h3>
          <textarea
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={4}
            placeholder="Write a brief synopsis of your story..."
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Characters</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Character avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-medium">Main Character</h4>
                  <p className="text-sm text-gray-500">Protagonist</p>
                </div>
              </div>
              <button className="text-blue-500 hover:text-blue-600">Edit</button>
            </div>
          </div>
          <button className="mt-2 text-blue-500 hover:text-blue-600">
            + Add Character
          </button>
        </div>
      </div>
    </div>
  );
};