import React, { useState } from 'react';
import { ProjectInfo } from './ProjectInfo';
import { CharacterCreation } from './CharacterCreation/CharacterCreation';
import { EditorHeader } from './Editor/EditorHeader';
import { MessageList } from './Editor/MessageList';
import { MessageInput } from './Editor/MessageInput';
import { Sidebar } from './Sidebar';

interface Message {
  id: number;
  character: string;
  content: string;
  avatar: string;
  isEditing: boolean;
}

function Including_character_creation() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, character: 'MiCael', content: 'ฉันมองไปได้รอบนิดหน่อยๆ', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop', isEditing: false },
    { id: 2, character: 'MiCael', content: 'เขียนนิยายของคุณ', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop', isEditing: false },
    { id: 3, character: 'MiCael', content: 'เขียนนิยายของคุณ', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop', isEditing: false }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [wordCount] = useState(0);
  const [editingContent, setEditingContent] = useState('');
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [showCharacterCreation, setShowCharacterCreation] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [activeView, setActiveView] = useState('home');

  const handleNavigation = (view: string) => {
    setActiveView(view);
    setShowProjectInfo(view === 'project');
    setShowCharacterCreation(view === 'character');
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        character: 'MiCael',
        content: newMessage,
        avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop',
        isEditing: false
      }]);
      setNewMessage('');
    }
  };

  const startEditing = (message: Message) => {
    const updatedMessages = messages.map(msg => ({
      ...msg,
      isEditing: msg.id === message.id
    }));
    setMessages(updatedMessages);
    setEditingContent(message.content);
  };

  const saveEdit = (messageId: number) => {
    const updatedMessages = messages.map(msg => 
      msg.id === messageId
        ? { ...msg, content: editingContent, isEditing: false }
        : msg
    );
    setMessages(updatedMessages);
  };

  const cancelEdit = (messageId: number) => {
    const updatedMessages = messages.map(msg => 
      msg.id === messageId ? { ...msg, isEditing: false } : msg
    );
    setMessages(updatedMessages);
    setEditingContent('');
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        activeView={activeView}
        selectedChapter={selectedChapter}
        handleNavigation={handleNavigation}
        setSelectedChapter={setSelectedChapter}
      />

      {/* Main Content */}
      {showProjectInfo ? (
        <ProjectInfo onClose={() => handleNavigation('home')} />
      ) : showCharacterCreation ? (
        <CharacterCreation />
      ) : (
        <div className="flex-1 flex flex-col">
          <EditorHeader wordCount={wordCount} />
          <MessageList
            messages={messages}
            editingContent={editingContent}
            setEditingContent={setEditingContent}
            startEditing={startEditing}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
          />
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

export default Including_character_creation;