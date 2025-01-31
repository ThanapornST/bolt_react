import React from 'react';
import { X, PenSquare } from 'lucide-react';

interface CreateTitleModalProps {
  onClose: () => void;
  onCreateTitle: () => void;
}

const CreateTitleModal: React.FC<CreateTitleModalProps> = ({ onClose, onCreateTitle }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
        
        <div className="relative bg-black rounded-lg max-w-lg w-full p-6 overflow-hidden">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Create Title</h2>
          <p className="text-gray-400 mb-8">The type of story you want to create</p>

          <div className="grid grid-cols-2 gap-4">
            <button
              className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-colors group"
              onClick={onCreateTitle}
            >
              <PenSquare className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-3" />
              <span className="text-white font-medium">Episodic Story</span>
              <span className="text-gray-400 text-sm">(with multiple chapters)</span>
            </button>

            <button
              className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-gray-700 hover:border-blue-500 transition-colors group"
              onClick={onCreateTitle}
            >
              <PenSquare className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-3" />
              <span className="text-white font-medium">Create Title</span>
              <span className="text-gray-400 text-sm">(one-shot)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTitleModal;