import React, { useState } from 'react';
import { CharacterSidebar } from './Character/CharacterSidebar';
import { CharacterInfo } from './Character/CharacterInfo';
import { DialogHeader } from './Character/DialogHeader';
import { CharacterDialog } from './Character/CharacterDialog';
import { DialogInput } from './Character/DialogInput';
import { BackgroundInfo } from './CharacterBackground/BackgroundInfo';
import { VoiceSettings } from './CharacterVoice/VoiceSettings';
import { VoiceRecorder } from './CharacterVoice/VoiceRecorder';
import { VoicePresets } from './CharacterVoice/VoicePresets';

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
  const [showBackgroundInfo, setShowBackgroundInfo] = useState(false);
  const [showVoiceSettings, setShowVoiceSettings] = useState(false);

  // Voice settings state
  const [pitch, setPitch] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [emotion, setEmotion] = useState('normal');
  const [voicePresets, setVoicePresets] = useState([
    { id: 1, name: 'Default Voice', pitch: 50, speed: 50, emotion: 'normal' },
    { id: 2, name: 'Happy Voice', pitch: 60, speed: 55, emotion: 'happy' }
  ]);

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

  const handleSaveBackground = (data: any) => {
    console.log('Saving background:', data);
    setShowBackgroundInfo(false);
  };

  const handleSaveVoice = (audioUrl: string) => {
    console.log('Saving voice:', audioUrl);
  };

  const handleSelectPreset = (preset: any) => {
    setPitch(preset.pitch);
    setSpeed(preset.speed);
    setEmotion(preset.emotion);
  };

  const handleDeletePreset = (presetId: number) => {
    setVoicePresets(voicePresets.filter(p => p.id !== presetId));
  };

  const handleSavePreset = (name: string) => {
    const newPreset = {
      id: voicePresets.length + 1,
      name,
      pitch,
      speed,
      emotion
    };
    setVoicePresets([...voicePresets, newPreset]);
  };

  return (
    <div className="flex h-screen bg-white">
      <CharacterSidebar onShowCharacterInfo={() => setShowCharacterInfo(true)} />

      {showCharacterInfo ? (
        <CharacterInfo onClose={() => setShowCharacterInfo(false)} />
      ) : showBackgroundInfo ? (
        <div className="flex-1 p-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Character Background</h2>
            <BackgroundInfo onSave={handleSaveBackground} />
          </div>
        </div>
      ) : showVoiceSettings ? (
        <div className="flex-1 p-6 bg-gray-50">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold">Voice Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <VoiceSettings
                  pitch={pitch}
                  speed={speed}
                  emotion={emotion}
                  onPitchChange={setPitch}
                  onSpeedChange={setSpeed}
                  onEmotionChange={setEmotion}
                />
                <div className="mt-6">
                  <VoiceRecorder onSave={handleSaveVoice} />
                </div>
              </div>
              <VoicePresets
                presets={voicePresets}
                onSelectPreset={handleSelectPreset}
                onDeletePreset={handleDeletePreset}
                onSavePreset={handleSavePreset}
              />
            </div>
          </div>
        </div>
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

      <div className="fixed bottom-4 right-4 space-x-2">
        <button
          onClick={() => {
            setShowCharacterInfo(false);
            setShowBackgroundInfo(true);
            setShowVoiceSettings(false);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Background
        </button>
        <button
          onClick={() => {
            setShowCharacterInfo(false);
            setShowBackgroundInfo(false);
            setShowVoiceSettings(true);
          }}
          className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
        >
          Voice
        </button>
      </div>
    </div>
  );
}

export default CreateCharacter;