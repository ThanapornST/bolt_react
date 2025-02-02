import React from 'react';
import { Plus } from 'lucide-react';

interface AddCharacterCardProps {
  onClick: () => void;
}

export function AddCharacterCard({ onClick }: AddCharacterCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#1a1f2e] rounded-lg p-6 flex items-center justify-center hover:bg-[#2a2f3e] transition-colors h-[120px]"
    >
      <div className="flex flex-col items-center space-y-2">
        <Plus className="w-8 h-8 text-emerald-500" />
        <span className="text-gray-400">Add New Character</span>
      </div>
    </button>
  );
}