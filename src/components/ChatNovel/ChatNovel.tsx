import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Send, Loader2 } from 'lucide-react';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatNovel = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userMessage: string) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      const prompt = `
        Act as a creative writing partner. We're writing a novel in chat format.
        Respond to my message in a natural, conversational way, as if you're a character in the story.
        Keep the response engaging and story-like, but in a modern chat format.
        Previous context: ${messages.map(m => `${m.role}: ${m.content}`).join('\n')}
        User message: ${userMessage}
      `;

      const result = await model.generateContent(prompt);
      const response = result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating response:', error);
      return "Sorry, I couldn't generate a response at the moment.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    const response = await generateResponse(inputMessage);

    const assistantMessage: Message = {
      role: 'assistant',
      content: response,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-semibold text-gray-800">Chat Novel</h1>
        <p className="text-sm text-gray-500">Write your story through conversation</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-4 ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800'
              } shadow-sm`}
            >
              <p className="text-sm">{message.content}</p>
              <span className="text-xs opacity-75 mt-1 block">
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="bg-white p-4 border-t">
        <div className="flex space-x-4">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Write your part of the story..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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