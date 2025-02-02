import React, { useState } from 'react';
import { Character } from './types/character';
import { CharacterList } from './charactersound/CharacterList';

function App() {
  const [characters, setCharacters] = useState<Character[]>([
    { id: 1, name: 'ตัวละคร 1', status: 'สถานะ', isStarred: true },
    { id: 2, name: 'ตัวละคร 2', status: 'สถานะ', isStarred: true },
  ]);

  const handleUpdateCharacter = (id: number, updates: Partial<Character>) => {
    setCharacters(characters.map(char => 
      char.id === id ? { ...char, ...updates } : char
    ));
  };

  const handleAddCharacter = (newChar: Omit<Character, 'id'>) => {
    const newId = Math.max(0, ...characters.map(c => c.id)) + 1;
    setCharacters([...characters, {
      ...newChar,
      id: newId
    }]);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">ตัวละครทั้งหมด</h1>
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
            เพิ่มเสียงตัวละคร
          </button>
        </div>
        
        <CharacterList
          characters={characters}
          onUpdateCharacter={handleUpdateCharacter}
          onAddCharacter={handleAddCharacter}
        />
      </div>
    </div>
  );
}

export default App;