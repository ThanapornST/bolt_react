import React, { useState, useEffect } from 'react';
import { ProjectInfo } from './ProjectInfo';
import { CharacterCreation } from './CharacterCreation/CharacterCreation';
import { EditorHeader } from './Editor/EditorHeader';
import { MessageList } from './Editor/MessageList';
import { MessageInput } from './Editor/MessageInput';
import { Sidebar } from './Sidebar';
import { Mic, Loader2, Clock } from 'lucide-react';

interface Character {
  name: string;
  avatar: string;
  personality: string;
}

interface Message {
  id: number;
  character: string;
  content: string;
  avatar: string;
  isEditing: boolean;
}

interface NovelData {
  novelTitle: string;
  numberOfCharacters: string;
  plotSummary: string;
  additionalInfo: string;
  toneOfStory: string;
  storyStructure: string;
  genre: string;
  era: string;
  selectedTime: string;
}

function Including_character_creation() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [wordCount] = useState(0);
  const [editingContent, setEditingContent] = useState('');
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [showCharacterCreation, setShowCharacterCreation] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [activeView, setActiveView] = useState('ai');
  const [isGenerating, setIsGenerating] = useState(false);
  const [novelData, setNovelData] = useState<NovelData | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);

  // Generate characters based on novel data
  const generateCharacters = (data: NovelData) => {
    const numCharacters = parseInt(data.numberOfCharacters);
    const newCharacters: Character[] = [];
    
    const personalities = [
      'cheerful and optimistic',
      'mysterious and reserved',
      'brave and determined',
      'wise and cautious',
      'mischievous and playful'
    ];
    
    const avatars = [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop'
    ];

    for (let i = 0; i < numCharacters; i++) {
      newCharacters.push({
        name: `Character ${i + 1}`,
        avatar: avatars[i % avatars.length],
        personality: personalities[i % personalities.length]
      });
    }

    setCharacters(newCharacters);
    if (newCharacters.length > 0) {
      setCurrentCharacter(newCharacters[0]);
    }
  };

  // Simulate AI story generation based on form data
  const generateStory = async () => {
    if (!novelData) return;
    
    setIsGenerating(true);
    const totalTime = parseInt(novelData.selectedTime);
    setRemainingTime(totalTime);
    
    // Generate characters first
    generateCharacters(novelData);
    
    // Initial message from Narrator
    const initialMessage = {
      id: messages.length + 1,
      character: 'Narrator',
      content: `In a ${novelData.era} setting, a ${novelData.toneOfStory} tale begins to unfold...`,
      avatar: 'https://images.unsplash.com/photo-1464863979621-258859e62245?w=150&h=150&fit=crop',
      isEditing: false
    };
    
    setMessages([initialMessage]);

    // Calculate number of segments based on time
    const segments = Math.floor(totalTime / 5);
    const segmentDelay = (totalTime * 1000) / segments;

    // Timer for remaining time
    const timer = setInterval(() => {
      setRemainingTime(prev => Math.max(0, prev - 1));
    }, 1000);

    // Generate interactive dialogue
    for (let i = 0; i < segments; i++) {
      await new Promise(resolve => setTimeout(resolve, segmentDelay));
      
      const progress = ((i + 1) / segments) * 100;
      setGenerationProgress(progress);

      // Alternate between characters and narrator
      const character = characters[i % (characters.length + 1)] || {
        name: 'Narrator',
        avatar: 'https://images.unsplash.com/photo-1464863979621-258859e62245?w=150&h=150&fit=crop',
        personality: 'observant'
      };

      const segment = {
        id: messages.length + i + 2,
        character: character.name,
        content: generateDialogue(novelData, character, i + 1, segments),
        avatar: character.avatar,
        isEditing: false
      };
      
      setMessages(prev => [...prev, segment]);
    }

    clearInterval(timer);
    setIsGenerating(false);
    setGenerationProgress(100);
    setRemainingTime(0);
  };

  // Generate character dialogue
  const generateDialogue = (data: NovelData, character: Character, currentSegment: number, totalSegments: number) => {
    const { genre, plotSummary } = data;
    
    if (character.name === 'Narrator') {
      const narrationTypes = [
        'The scene unfolds...',
        'Meanwhile...',
        'Time passes...',
        'In the distance...',
        'The atmosphere changes...'
      ];
      return `${narrationTypes[currentSegment % narrationTypes.length]} ${plotSummary}`;
    }

    const dialogueTemplates = {
      romance: [
        'My heart skips a beat when...',
        'I never thought I would feel this way...',
        'Sometimes love finds us in unexpected places...'
      ],
      fantasy: [
        'The magic in this realm is unlike anything I\'ve seen...',
        'Legends speak of a power that...',
        'In all my years of studying the arcane...'
      ],
      mystery: [
        'Something doesn\'t add up here...',
        'I have a theory about what happened...',
        'The clues are leading us to...'
      ]
    };

    const templates = dialogueTemplates[genre as keyof typeof dialogueTemplates] || [
      'I have something to say...',
      'Let me tell you what I think...',
      'This is interesting...'
    ];

    return `[${character.name} - ${character.personality}]\n"${templates[currentSegment % templates.length]}"`;
  };

  // Effect to handle novel data when switching to AI view
  useEffect(() => {
    if (activeView === 'ai') {
      const savedNovelData = localStorage.getItem('novelData');
      if (savedNovelData) {
        const parsedData = JSON.parse(savedNovelData);
        setNovelData(parsedData);
        if (messages.length === 0) {
          generateStory();
        }
      }
    }
  }, [activeView]);

  // Handle user message input
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        character: currentCharacter?.name || 'User',
        content: newMessage,
        avatar: currentCharacter?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        isEditing: false
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');

      // Generate AI response
      setTimeout(() => {
        const respondingCharacter = characters[Math.floor(Math.random() * characters.length)];
        const aiResponse = {
          id: messages.length + 2,
          character: respondingCharacter.name,
          content: generateDialogue(novelData!, respondingCharacter, messages.length, 10),
          avatar: respondingCharacter.avatar,
          isEditing: false
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

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
      ) : activeView === "voice" ? (
        <div className="flex-1 flex flex-col">
          <EditorHeader wordCount={wordCount} />
        </div>
      ) : (
        <div className="flex-1 flex flex-col">
          {/* Character Selection */}
          {characters.length > 0 && (
            <div className="flex items-center space-x-2 p-4 bg-gray-50 border-b">
              <span className="text-sm text-gray-500">Speaking as:</span>
              <div className="flex space-x-2">
                {characters.map((char) => (
                  <button
                    key={char.name}
                    onClick={() => setCurrentCharacter(char)}
                    className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
                      currentCharacter?.name === char.name
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <img src={char.avatar} alt={char.name} className="w-6 h-6 rounded-full" />
                    <span>{char.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Generation Progress */}
          {isGenerating && (
            <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-blue-50 text-blue-700">
              <div className="flex items-center space-x-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Generating your story...</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{remainingTime} seconds remaining</span>
              </div>
              <div className="w-full max-w-md h-2 bg-blue-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${generationProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Chat Messages */}
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

          {/* Message Input */}
          <MessageInput
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            handleSendMessage={handleSendMessage}
          />
        </div>
      )}

      {/* Voice creation button */}
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