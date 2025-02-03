import React, { useState } from 'react';
import { ProjectInfo } from './ProjectInfo';
import { CharacterCreation } from './CharacterCreation/CharacterCreation';
import { EditorHeader } from './Editor/EditorHeader';
import { MessageList } from './Editor/MessageList';
import { MessageInput } from './Editor/MessageInput';
import { Sidebar } from './Sidebar';
import { Mic } from 'lucide-react'; // ✅ นำเข้าไอคอน Microphone

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
  const [activeView, setActiveView] = useState('home'); // ✅ เพิ่ม activeView ให้รองรับ 'voice'

  const handleNavigation = (view: string) => {
    setActiveView(view);
    setShowProjectInfo(view === 'project');
    setShowCharacterCreation(view === 'character');
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
      ) : activeView === "voice" ? ( // ✅ เพิ่มเงื่อนไขแสดง "สร้างเสียงตัวละคร"
        <div className="flex-1 flex flex-col">
          <EditorHeader wordCount={wordCount} />
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          <MessageList
            messages={messages}
            editingContent={editingContent}
            setEditingContent={setEditingContent}
            startEditing={(msg) =>
              setMessages(messages.map(m => m.id === msg.id ? { ...m, isEditing: true } : m))
            }
            saveEdit={(id) =>
              setMessages(messages.map(m => m.id === id ? { ...m, content: editingContent, isEditing: false } : m))
            }
            cancelEdit={(id) =>
              setMessages(messages.map(m => m.id === id ? { ...m, isEditing: false } : m))
            }
          />
          <MessageInput
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            handleSendMessage={() => {
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
            }}
          />
        </div>
      )}

      {/* ✅ ปุ่มสร้างเสียงตัวละคร */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => handleNavigation("voice")}
          className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
            activeView === "voice" ? "bg-emerald-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          <Mic className="w-5 h-5" />
          <span>สร้างเสียงตัวละคร</span>
        </button>
      </div>
    </div>
  );
}

export default Including_character_creation;
