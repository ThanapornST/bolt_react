import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { CharacterEditModal } from './CharacterEditModal';

interface Character {
  id: number;
  name: string;
  description: string;
  avatar: string;
  isFavorite: boolean;
  voice: number | null;
}

export const CharacterCreation: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([
    {
      id: 1,
      name: 'Main Character',
      description: 'The protagonist of the story',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      isFavorite: true,
      voice: 1,
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState<Character | null>(null);

  const handleEditCharacter = (character: Character) => {
    setEditingCharacter(character);
    setShowModal(true);
  };

  const handleAddCharacter = () => {
    setEditingCharacter(null);
    setShowModal(true);
  };

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Characters</h2>
          <button
            onClick={handleAddCharacter}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Plus className="w-5 h-5" />
            <span>Add Character</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {characters.map((character) => (
            <div
              key={character.id}
              className="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-4"
            >
              <div className="relative">
                <img
                  src={character.avatar}
                  alt={character.name}
                  className="w-16 h-16 rounded-full"
                />
                {character.isFavorite && (
                  <Star className="absolute -top-1 -left-1 w-5 h-5 text-yellow-500 fill-yellow-500" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{character.name}</h3>
                <p className="text-sm text-gray-500">{character.description}</p>
              </div>
              <button
                onClick={() => handleEditCharacter(character)}
                className="px-3 py-1 text-blue-500 hover:bg-blue-50 rounded-md"
              >
                Edit
              </button>
            </div>
          ))}
        </div>

        {showModal && (
          <CharacterEditModal
            character={editingCharacter}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};