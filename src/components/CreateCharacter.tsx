import React, { useState } from 'react';
import { CharacterSidebar } from './Character/CharacterSidebar';
import { CharacterInfo } from './Character/CharacterInfo';
import { DialogHeader } from './Character/DialogHeader';
import { CharacterDialog } from './Character/CharacterDialog';
import { DialogInput } from './Character/DialogInput';


function CreateCharacter() {
  const [dialogs, setDialogs] = useState([
    { id: 1, character: 'MiCael', content: 'ฉันมองไปได้รอบนิดหน่อยๆ', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop', isEditing: false },
    { id: 2, character: 'MiCael', content: 'เขียนบทสนทนาของคุณ', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop', isEditing: false },
    { id: 3, character: 'MiCael', content: 'เขียนบทสนทนาของคุณ', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop', isEditing: false }
  ]);
  const [newDialog, setNewDialog] = useState('');
  const [wordCount] = useState(0);
  const [editingContent, setEditingContent] = useState('');
  const [showCharacterInfo, setShowCharacterInfo] = useState(false);

  const handleSendDialog = () => {
    if (newDialog.trim()) {
      setDialogs([...dialogs, {
        id: dialogs.length + 1,
        character: 'MiCael',
        content: newDialog,
        avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop',
        isEditing: false
      }]);
      setNewDialog('');
    }
  };

  const startEditing = (dialog: { id: number; content: React.SetStateAction<string>; }) => {
    const updatedDialogs = dialogs.map(d => ({
      ...d,
      isEditing: d.id === dialog.id
    }));
    setDialogs(updatedDialogs);
    setEditingContent(dialog.content);
  };

  const saveEdit = (dialogId: number) => {
    const updatedDialogs = dialogs.map(d => 
      d.id === dialogId
        ? { ...d, content: editingContent, isEditing: false }
        : d
    );
    setDialogs(updatedDialogs);
  };

  const cancelEdit = (dialogId: number) => {
    const updatedDialogs = dialogs.map(d => 
      d.id === dialogId ? { ...d, isEditing: false } : d
    );
    setDialogs(updatedDialogs);
    setEditingContent('');
  };

  return (
    <div className="flex h-screen bg-white">
      <CharacterSidebar onShowCharacterInfo={() => setShowCharacterInfo(true)} />

      {showCharacterInfo ? (
        <CharacterInfo onClose={() => setShowCharacterInfo(false)} />
      ) : (
        <div className="flex-1 flex flex-col">
          <DialogHeader wordCount={wordCount} />

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {dialogs.map((dialog) => (
              <CharacterDialog
                key={dialog.id}
                dialog={dialog}
                editingContent={editingContent}
                onStartEditing={startEditing}
                onSaveEdit={saveEdit}
                onCancelEdit={cancelEdit}
                onEditingContentChange={setEditingContent}
              />
            ))}
          </div>

          <DialogInput
            newDialog={newDialog}
            onDialogChange={setNewDialog}
            onSendDialog={handleSendDialog}
          />
        </div>
      )}
    </div>
  );
}

export default CreateCharacter;