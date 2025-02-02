import React, { useState } from 'react';
import { Character } from '../types/character';
import { CharacterCard } from './CharacterCard';
import { EditCharacterModal } from './EditCharacterModal';
import { AddCharacterCard } from './AddCharacterCard';

interface CharacterListProps {
  characters: Character[];
  onUpdateCharacter: (id: number, updates: Partial<Character>) => void;
  onAddCharacter: (character: Omit<Character, 'id'>) => void;
}

export function CharacterList({
  characters,
  onUpdateCharacter,
  onAddCharacter
}: CharacterListProps) {
  const [editingCharacter, setEditingCharacter] = useState<Character | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleEdit = (character: Character) => {
    setEditingCharacter(character);
  };

  const handleSave = (id: number, updates: Partial<Character>) => {
    onUpdateCharacter(id, updates);
    setEditingCharacter(null);
  };

  const handleToggleStar = (id: number, isStarred: boolean) => {
    onUpdateCharacter(id, { isStarred });
  };

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const handleAddSave = (character: Omit<Character, 'id'>) => {
    onAddCharacter(character);
    setShowAddModal(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onEdit={handleEdit}
          onToggleStar={handleToggleStar}
        />
      ))}
      <AddCharacterCard onClick={handleAdd} />

      {editingCharacter && (
        <EditCharacterModal
          character={editingCharacter}
          onClose={() => setEditingCharacter(null)}
          onSave={handleSave}
        />
      )}

      {showAddModal && (
        <EditCharacterModal
          isNew
          character={{ id: 0, name: '', status: '', isStarred: false }}
          onClose={() => setShowAddModal(false)}
          onSave={(_, updates) => handleAddSave(updates as Omit<Character, 'id'>)}
        />
      )}
    </div>
  );
}