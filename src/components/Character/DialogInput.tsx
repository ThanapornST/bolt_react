import React from 'react';
import { Mic } from 'lucide-react';

interface DialogInputProps {
  newDialog: string;
  onDialogChange: (value: string) => void;
  onSendDialog: () => void;
}

export function DialogInput({ newDialog, onDialogChange, onSendDialog }: DialogInputProps) {
  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      <div className="flex items-end space-x-4">
        <div className="flex-1">
          <textarea
            value={newDialog}
            onChange={(e) => onDialogChange(e.target.value)}
            placeholder="เขียนนิยายของคุณ..."
            className="w-full bg-gray-50 text-gray-900 rounded-lg p-3 min-h-[100px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Mic className="w-5 h-5" />
          </button>
          <button
            onClick={onSendDialog}
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}