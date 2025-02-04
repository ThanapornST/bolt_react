import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Send, Loader2, ArrowLeft, Clock } from 'lucide-react';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyCZ4GECnSPbxDIpNayZXVPE5R8XrOMDeZY');

interface Character {
  id: number;
  name: string;
  avatar: string;
}

interface Message {
  id: number;
  character: Character;
  content: string;
  timestamp: Date;
  duration: number;
}

const ChatNovel = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(30);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Define characters
  const characters: Character[] = [
    {
      id: 1,
      name: "Sarah",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "James",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop"
    }
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userInput: string) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const prompt = `
        Continue this chat conversation between two characters. 
        Make it natural and engaging, focusing only on dialogue without narration.
        Previous message: ${userInput}
        
        Respond in a conversational style as one of the characters.
      `;

      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Error generating response:', error);
      return 'I apologize, but I was unable to continue the conversation at this moment.';
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      character: characters[0],
      content: inputMessage,
      timestamp: new Date(),
      duration: selectedDuration
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await generateResponse(inputMessage);
      
      const aiMessage: Message = {
        id: messages.length + 2,
        character: characters[1],
        content: response,
        timestamp: new Date(),
        duration: selectedDuration
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex items-center">
        <button className="text-white mr-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-lg font-semibold">Chat Novel</h1>
      </div>

      {/* Duration Selection */}
      <div className="bg-gray-800 p-4 flex justify-center space-x-4">
        {[15, 30, 60, 120].map(duration => (
          <button
            key={duration}
            onClick={() => setSelectedDuration(duration)}
            className={`px-4 py-2 rounded ${
              selectedDuration === duration
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {duration}s
          </button>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            } items-start space-x-3`}
          >
            {index % 2 === 0 && (
              <img
                src={message.character.avatar}
                alt={message.character.name}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div className={`max-w-[70%] ${index % 2 === 0 ? 'mr-12' : 'ml-12'}`}>
              <div
                className={`rounded-lg p-4 ${
                  index % 2 === 0
                    ? 'bg-gray-700 text-white'
                    : 'bg-blue-500 text-white'
                }`}
              >
                <p>{message.content}</p>
                <div className="mt-2 flex items-center space-x-2 text-sm opacity-75">
                  <Clock className="w-4 h-4" />
                  <span>{message.duration}s</span>
                </div>
              </div>
            </div>
            {index % 2 !== 0 && (
              <img
                src={message.character.avatar}
                alt={message.character.name}
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
      <div className="border-t border-gray-700 p-4">
        <div className="flex space-x-4">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
};

export default ChatNovel;