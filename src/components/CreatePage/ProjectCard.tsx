import React from 'react';
import { Plus, BookOpen } from 'lucide-react';

interface ProjectCardProps {
  type?: 'new';
  title?: string;
  description?: string;
  progress?: number;
  lastEdited?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  type,
  title,
  description,
  progress,
  lastEdited,
  onClick,
}) => {
  if (type === 'new') {
    return (
      <button
        onClick={onClick}
        className="h-48 sm:h-64 border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors"
      >
        <Plus className="w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4" />
        <span className="text-base sm:text-lg font-medium">Create New Project</span>
        <span className="text-xs sm:text-sm mt-1 sm:mt-2">Start writing your story</span>
      </button>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">{description}</p>
        </div>
        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
      </div>
      
      <div className="mt-4 sm:mt-6">
        <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
          <div
            className="bg-blue-500 h-1.5 sm:h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 sm:mt-6 flex items-center justify-between">
        <span className="text-xs sm:text-sm text-gray-500">Last edited {lastEdited}</span>
        <button className="text-blue-500 hover:text-blue-600 text-xs sm:text-sm font-medium">
          Continue Writing
        </button>
      </div>
    </div>
  );
};

export default ProjectCard