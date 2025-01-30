import React from 'react';
import { Edit2, Check, X } from 'lucide-react';

interface CharacterDialogProps {
  dialog: {
    id: number;
    character: string;
    content: string;
    avatar: string;
    isEditing: boolean;
  };
  editingContent: string;
  onStartEditing: (dialog: CharacterDialogProps['dialog']) => void;
  onSaveEdit: (dialogId: number) => void;
  onCancelEdit: (dialogId: number) => void;
  onEditingContentChange: (content: string) => void;
}

export function CharacterDialog({
  dialog,
  editingContent,
  onStartEditing,
  onSaveEdit,
  onCancelEdit,
  onEditingContentChange,
}: CharacterDialogProps) {
  return (
    <div className="flex items-start space-x-3 group">
      <img src={dialog.avatar} alt={dialog.character} className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <span className="text-gray-900 font-medium">{dialog.character}</span>
          <div className="flex items-center space-x-1">
            <button className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">L</button>
            <button className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xs">R</button>
          </div>
          {!dialog.isEditing && (
            <button 
              onClick={() => onStartEditing(dialog)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-gray-600"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          )}
        </div>
        {dialog.isEditing ? (
          <div className="flex flex-col space-y-2">
            <textarea
              value={editingContent}
              onChange={(e) => onEditingContentChange(e.target.value)}
              className="bg-white text-gray-900 p-3 rounded-lg max-w-3xl w-full min-h-[100px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => onSaveEdit(dialog.id)}
                className="px-3 py-1 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 flex items-center space-x-1"
              >
                <Check className="w-4 h-4" />
                <span>บันทึก</span>
              </button>
              <button
                onClick={() => onCancelEdit(dialog.id)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center space-x-1"
              >
                <X className="w-4 h-4" />
                <span>ยกเลิก</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white text-gray-900 p-3 rounded-lg max-w-3xl border border-gray-200">
            {dialog.content}
          </div>
        )}
      </div>
    </div>
  );
}