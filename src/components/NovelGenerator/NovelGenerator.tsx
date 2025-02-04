import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Send, Loader2, BookOpen, User2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NovelForm {
  title: string;
  numberOfCharacters: string;
  plotSummary: string;
  additionalInfo: string;
  toneOfStory: string;
  storyStructure: string;
  genre: string;
  era: string;
}

interface Character {
  name: string;
  avatar: string;
  role: string;
}

interface Message {
  character: Character;
  content: string;
  timestamp: Date;
}

const NovelGenerator = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<NovelForm>({
    title: '',
    numberOfCharacters: '',
    plotSummary: '',
    additionalInfo: '',
    toneOfStory: '',
    storyStructure: '',
    genre: '',
    era: '',
  });

  const [messages, setMessages] = useState<Message[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  const characterAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const generateCharacters = () => {
    const numCharacters = parseInt(form.numberOfCharacters);
    const newCharacters: Character[] = [];

    for (let i = 0; i < numCharacters; i++) {
      newCharacters.push({
        name: `Character ${i + 1}`,
        avatar: characterAvatars[i % characterAvatars.length],
        role: i === 0 ? 'Protagonist' : `Supporting Character ${i}`
      });
    }

    setCharacters(newCharacters);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    generateCharacters();

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `
        Create a creative story based on the following details:
        Title: ${form.title}
        Genre: ${form.genre}
        Era: ${form.era}
        Tone: ${form.toneOfStory}
        Plot Summary: ${form.plotSummary}
        
        Generate a conversation-style story between ${form.numberOfCharacters} characters.
        Make it engaging and natural, like a chat conversation.
        Include character emotions and actions in brackets.
      `;

      const result = await model.generateContent(prompt);
      const storyText = result.response.text();
      
      // Split the story into messages
      const storyLines = storyText.split('\n').filter(line => line.trim());
      
      const newMessages = storyLines.map((line, index) => ({
        character: characters[index % characters.length],
        content: line,
        timestamp: new Date()
      }));

      setMessages(newMessages);
    } catch (error) {
      console.error('Error generating story:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">Create Your Novel</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Novel Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Characters
                </label>
                <input
                  type="number"
                  name="numberOfCharacters"
                  value={form.numberOfCharacters}
                  onChange={handleInputChange}
                  min="2"
                  max="4"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Plot Summary
                </label>
                <textarea
                  name="plotSummary"
                  value={form.plotSummary}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg h-24"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Genre
                </label>
                <select
                  name="genre"
                  value={form.genre}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                >
                  <option value="">Select genre</option>
                  <option value="romance">Romance</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="mystery">Mystery</option>
                  <option value="scifi">Science Fiction</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Era
                </label>
                <select
                  name="era"
                  value={form.era}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                >
                  <option value="">Select era</option>
                  <option value="ancient">Ancient</option>
                  <option value="medieval">Medieval</option>
                  <option value="modern">Modern</option>
                  <option value="future">Future</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tone of Story
                </label>
                <select
                  name="toneOfStory"
                  value={form.toneOfStory}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                >
                  <option value="">Select tone</option>
                  <option value="dramatic">Dramatic</option>
                  <option value="humorous">Humorous</option>
                  <option value="serious">Serious</option>
                  <option value="light">Light</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Story Structure
                </label>
                <select
                  name="storyStructure"
                  value={form.storyStructure}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg"
                  required
                >
                  <option value="">Select structure</option>
                  <option value="linear">Linear</option>
                  <option value="nonlinear">Non-linear</option>
                  <option value="episodic">Episodic</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {isGenerating ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Generating Story...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Generate Novel with AI</span>
                </div>
              )}
            </button>
          </form>
        </div>

        {messages.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">{form.title}</h2>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <img
                    src={message.character.avatar}
                    alt={message.character.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{message.character.name}</span>
                      <span className="text-sm text-gray-500">
                        {message.character.role}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-800">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NovelGenerator;