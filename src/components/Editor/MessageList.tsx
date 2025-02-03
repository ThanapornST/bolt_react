import React from 'react';
import { Edit2, Save, X } from 'lucide-react';

interface Message {
  id: number;
  character: string;
  content: string;
  avatar: string;
  isEditing: boolean;
}

interface MessageListProps {
  messages: Message[];
  editingContent: string;
  setEditingContent: (content: string) => void;
  startEditing: (message: Message) => void;
  saveEdit: (messageId: number) => void;
  cancelEdit: (messageId: number) => void;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  editingContent,
  setEditingContent,
  startEditing,
  saveEdit,
  cancelEdit,
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="flex items-start space-x-3">
          <img
            src={message.avatar}
            alt={message.character}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="font-medium">{message.character}</span>
              {!message.isEditing && (
                <button
                  onClick={() => startEditing(message)}
                  className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              )}
            </div>
            {message.isEditing ? (
              <div className="mt-1">
                <textarea
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
                <div className="mt-2 flex space-x-2">
                  <button
                    onClick={() => saveEdit(message.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center space-x-1"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={() => cancelEdit(message.id)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center space-x-1"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ) : (
              <p className="mt-1 text-gray-800">{message.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};