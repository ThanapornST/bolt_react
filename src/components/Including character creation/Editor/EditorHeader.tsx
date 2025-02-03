import React from 'react';

interface EditorHeaderProps {
  wordCount: number;
}

export const EditorHeader: React.FC<EditorHeaderProps> = ({ wordCount }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">Story Editor</h1>
          <span className="text-sm text-gray-500">{wordCount} words</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            Save Draft
          </button>
          <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};