import React, { useState } from 'react';
import { Languages, ExternalLink, Mic, BookOpen, Home, Sparkles, Plus, Settings, Pencil, Check, X } from 'lucide-react';

const NovelEditor = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      character: 'MiCael',
      content: 'ฉันมองไปได้รอบนิดหน่อยๆ',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop',
      isEditing: false
    },
    {
      id: 2,
      character: 'MiCael',
      content: 'เขียนนิยายของคุณ',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop',
      isEditing: false
    },
    {
      id: 3,
      character: 'MiCael',
      content: 'เขียนนิยายของคุณ',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop',
      isEditing: false
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [editingContent, setEditingContent] = useState('');

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

  const startEditing = (message) => {
    const updatedMessages = messages.map(msg => ({
      ...msg,
      isEditing: msg.id === message.id
    }));
    setMessages(updatedMessages);
    setEditingContent(message.content);
  };

  const saveEdit = (messageId) => {
    const updatedMessages = messages.map(msg => 
      msg.id === messageId
        ? { ...msg, content: editingContent, isEditing: false }
        : msg
    );
    setMessages(updatedMessages);
    setEditingContent('');
  };

  const cancelEdit = (messageId) => {
    const updatedMessages = messages.map(msg => 
      msg.id === messageId ? { ...msg, isEditing: false } : msg
    );
    setMessages(updatedMessages);
    setEditingContent('');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-8">
            <BookOpen className="w-6 h-6 text-emerald-500" />
            <span className="text-xl font-semibold">WriteWhisper</span>
          </div>

          <nav className="space-y-2">
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg">
              <Home className="w-5 h-5 mr-3" />
              <span>หน้าหลัก</span>
            </a>
            <button className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded-lg w-full">
              <BookOpen className="w-5 h-5 mr-3" />
              <span>ข้อมูลProjects</span>
            </button>
            <button className="flex items-center px-4 py-2 text-emerald-500 hover:bg-gray-800 rounded-lg w-full">
              <Mic className="w-5 h-5 mr-3" />
              <span>สร้างเสียงตัวละคร</span>
            </button>
            <button className="flex items-center px-4 py-2 text-emerald-500 hover:bg-gray-800 rounded-lg w-full">
              <Sparkles className="w-5 h-5 mr-3" />
              <span>AI สร้างนิยาย</span>
            </button>
          </nav>

          <div className="mt-8">
            <div className="px-4 text-sm font-medium text-gray-400 mb-2">ตอนนิยายทั้งหมด</div>
            <button className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-lg w-full mb-2">
              <span>ตอนที่ 1 ยังไม่มีชื่อ</span>
            </button>
            <button className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-lg w-full mb-2">
              <span>ตอนที่ 2 ยังไม่มีชื่อ</span>
            </button>
            <button className="flex items-center px-4 py-2 text-emerald-500 hover:bg-gray-800 rounded-lg w-full">
              <Plus className="w-4 h-4 mr-2" />
              <span>เพิ่มตอนใหม่</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-64 p-4 bg-black border-t border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
              <div>
                <div className="text-gray-300 text-sm">นามปากกา : marisa</div>
                <div className="text-gray-400 text-xs">Point : 2000 pt</div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-300">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl text-gray-900">Chapter 1 : The Beginning</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">0 words</span>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <Languages className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <ExternalLink className="w-5 h-5" />
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Export
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-3 group">
              <img src={message.avatar} alt={message.character} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-gray-900 font-medium">{message.character}</span>
                  <div className="flex items-center space-x-1">
                    <button className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">L</button>
                    <button className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xs">R</button>
                  </div>
                  {!message.isEditing && (
                    <button 
                      onClick={() => startEditing(message)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-gray-600"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {message.isEditing ? (
                  <div className="flex flex-col space-y-2">
                    <textarea
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                      className="bg-white text-gray-900 p-3 rounded-lg max-w-3xl w-full min-h-[100px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={() => saveEdit(message.id)}
                        className="px-3 py-1 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 flex items-center space-x-1"
                      >
                        <Check className="w-4 h-4" />
                        <span>บันทึก</span>
                      </button>
                      <button
                        onClick={() => cancelEdit(message.id)}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center space-x-1"
                      >
                        <X className="w-4 h-4" />
                        <span>ยกเลิก</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white text-gray-900 p-3 rounded-lg max-w-3xl border border-gray-200">
                    {message.content}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="เขียนนิยายของคุณ..."
                className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 min-h-[100px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Mic className="w-5 h-5" />
              </button>
              <button
                onClick={handleSendMessage}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovelEditor;