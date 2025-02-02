import React from 'react';
import { Star, Pencil } from 'lucide-react';
import { Character } from '../types/character';

interface CharacterCardProps {
  character: Character;
  onEdit: (character: Character) => void;
  onToggleStar: (id: number, isStarred: boolean) => void;
}

export function CharacterCard({ character, onEdit, onToggleStar }: CharacterCardProps) {
  return (
    <div className="bg-[#1a1f2e] rounded-lg p-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-[#2a2f3e] rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-2xl">
            {character.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-white font-medium">{character.name}</h3>
          <p className="text-gray-400">{character.status}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onToggleStar(character.id, !character.isStarred)}
          className="p-2 hover:bg-[#2a2f3e] rounded-full transition-colors"
        >
          <Star className={`w-5 h-5 ${character.isStarred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
        </button>
        <button
          onClick={() => onEdit(character)}
          className="p-2 hover:bg-[#2a2f3e] rounded-full transition-colors"
        >
          <Pencil className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}