import { Sidebar } from 'lucide-react';
import React, { useState } from 'react';
import { ProjectInfo } from './Character/ProjectInfo';
import { CharacterCreation } from './Generate/CharacterCreation';
import Header from './CreatePage/Header';
import { MessageList } from './Generate/MessageList';
import { MessageInput } from './Character/MessageInput';


interface Message {
  id: number;
  character: string;
  content: string;
  avatar: string;
  isEditing: boolean;
}

function Generate() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, character: 'MiCael', content: 'ฉันมองไปได้รอบนิดหน่อยๆ', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop', isEditing: false },
    { id: 2, character: 'MiCael', content: 'เขียนนิยายของคุณ', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop', isEditing: false },
    { id: 3, character: 'MiCael', content: 'เขียนนิยายของคุณ', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop', isEditing: false }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [wordCount] = useState(0);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [showCharacterCreation, setShowCharacterCreation] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        character: 'MiCael',
        content: newMessage,
        avatar: 'https://images.unsplash.com/photo-1568602471122-7832951 <boltAction type="file" filePath="src/App.tsx">cc4c5?w=150&h=150&fit=crop',
        isEditing: false
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        onShowProjectInfo={() => {
          setShowProjectInfo(true);
          setShowCharacterCreation(false);
        }}
        onShowCharacterCreation={() => {
          setShowCharacterCreation(true);
          setShowProjectInfo(false);
        }}
      />

      {showProjectInfo ? (
        <ProjectInfo onClose={() => setShowProjectInfo(false)} />
      ) : showCharacterCreation ? (
        <CharacterCreation />
      ) : (
        <div className="flex-1 flex flex-col">
          <Header wordCount={wordCount} />
          <MessageList messages={messages} setMessages={setMessages} />
          <MessageInput
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            handleSendMessage={handleSendMessage}
          />
        </div>
      )}
    </div>
  );
}

export default Generate;