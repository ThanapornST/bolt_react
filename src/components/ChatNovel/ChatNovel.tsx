import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Send, Loader2, Play, Pause, X, Volume2, Clock } from 'lucide-react';

// Initialize Gemini AI with the API key
const genAI = new GoogleGenerativeAI('AIzaSyCZ4GECnSPbxDIpNayZXVPE5R8XrOMDeZY');

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  avatar: string;
  audioUrl?: string;
  isPlaying?: boolean;
}

interface Chapter {
  id: number;
  title: string;
  isComplete: boolean;
}

const ChatNovel = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTime, setSelectedTime] = useState('30');
  const [chapters, setChapters] = useState<Chapter[]>([
    { id: 1, title: 'Chapter 1: The Beginning', isComplete: false },
    { id: 2, title: 'Chapter 2: Untitled', isComplete: false }
  ]);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleAudio = (index: number) => {
    setMessages(messages.map((msg, i) => 
      i === index ? { ...msg, isPlaying: !msg.isPlaying } : msg
    ));
  };

  const generateNovelContent = async (userInput: string) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const prompt = `
        You are a creative writing assistant helping to write a novel. 
        Write the next part of the story based on this input: ${userInput}
        
        Make the response engaging and story-like, focusing on:
        - Natural dialogue
        - Character emotions
        - Scene descriptions
        - Plot advancement
        
        Keep the response concise but meaningful, suitable for a chat-based novel format.
      `;

      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Error generating content:', error);
      return 'I apologize, but I was unable to generate the story content at this moment. Please try again.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      isPlaying: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await generateNovelContent(inputMessage);

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        isPlaying: false
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteMessage = (index: number) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-screen bg-black">
      {/* Chapters Sidebar */}
      <div className="w-64 bg-black border-r border-gray-800">
        <div className="p-4">
          <h2 className="text-white font-semibold mb-4">Chapters</h2>
          <div className="space-y-2">
            {chapters.map(chapter => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter.id)}
                className={`w-full text-left p-2 rounded ${
                  selectedChapter === chapter.id
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:bg-gray-800'
                }`}
              >
                {chapter.title}
              </button>
            ))}
            <button className="w-full text-left p-2 text-blue-500 hover:bg-gray-800 rounded">
              + Add new chapter
            </button>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Time Selection */}
        <div className="bg-gray-900 p-4 flex justify-center space-x-4">
          {['15', '30', '60', '120'].map(time => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`px-4 py-2 rounded ${
                selectedTime === time
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {time} seconds
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              } space-x-3`}
            >
              {message.role === 'assistant' && (
                <img
                  src={message.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div className={`max-w-[70%] ${message.role === 'user' ? 'ml-12' : 'mr-12'}`}>
                <div
                  className={`rounded-lg p-4 relative group ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-white'
                  }`}
                >
                  <button 
                    onClick={() => toggleAudio(index)}
                    className="absolute right-2 top-2 p-2 rounded-full bg-opacity-50 bg-gray-700 hover:bg-opacity-75"
                  >
                    {message.isPlaying ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white" />
                    )}
                  </button>
                  <p className="pr-12">{message.content}</p>
                  <div className="mt-2 flex items-center space-x-2 text-sm opacity-75">
                    <Clock className="w-4 h-4" />
                    <span>{selectedTime}s</span>
                    <Volume2 className="w-4 h-4" />
                    <span>100%</span>
                  </div>
                </div>
                <button 
                  onClick={() => deleteMessage(index)}
                  className="mt-1 p-1 hover:bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              {message.role === 'user' && (
                <img
                  src={message.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-center">
              <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-800 p-4">
          <div className="flex space-x-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatNovel;